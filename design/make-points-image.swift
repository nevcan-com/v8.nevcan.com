// Makes the image the point cloud is sampled from (macOS, Apple Vision):
// - the portrait in greyscale with stronger local contrast, so the face reads as dots
// - the background removed (person segmentation): alpha is the person's outline
//
//   swift design/make-points-image.swift <portrait.jpg> public/media/nev-points.png [size]
//
// Source: dive.nevcan.com/source-media/nev-portrait_akin-bagcilar.jpg (photo: Akın Bağcılar).
import CoreImage
import Foundation
import Vision

let args = CommandLine.arguments
guard args.count >= 3 else {
  print("usage: swift make-points-image.swift <in.jpg> <out.png> [size=400]")
  exit(1)
}
let size = args.count > 3 ? Double(args[3])! : 400

guard let photo = CIImage(contentsOf: URL(fileURLWithPath: args[1])) else {
  print("can't read \(args[1])")
  exit(1)
}
let W = photo.extent.width
let H = photo.extent.height

// ---- person outline ----
let segment = VNGeneratePersonSegmentationRequest()
segment.qualityLevel = .accurate
segment.outputPixelFormat = kCVPixelFormatType_OneComponent8
try VNImageRequestHandler(ciImage: photo).perform([segment])
guard let maskBuffer = segment.results?.first?.pixelBuffer else {
  print("no person found")
  exit(1)
}
var mask = CIImage(cvPixelBuffer: maskBuffer)
mask = mask.transformed(
  by: CGAffineTransform(scaleX: W / mask.extent.width, y: H / mask.extent.height))

// greyscale, then local contrast up (large-radius unsharp mask)
let grey =
  photo
  .applyingFilter("CIColorControls", parameters: [kCIInputSaturationKey: 0])
  .applyingFilter(
    "CIUnsharpMask", parameters: [kCIInputRadiusKey: W / 50, kCIInputIntensityKey: 0.45]
  )
  .cropped(to: photo.extent)
let cutout = grey.applyingFilter(
  "CIBlendWithMask",
  parameters: [
    kCIInputBackgroundImageKey: CIImage(color: .clear).cropped(to: photo.extent),
    kCIInputMaskImageKey: mask,
  ])

let scale = size / W
let small = cutout.transformed(by: CGAffineTransform(scaleX: scale, y: scale))
try CIContext().writePNGRepresentation(
  of: small,
  to: URL(fileURLWithPath: args[2]),
  format: .RGBA8,
  colorSpace: CGColorSpace(name: CGColorSpace.sRGB)!)
print("wrote \(args[2]) (\(Int(size))×\(Int(size)))")
