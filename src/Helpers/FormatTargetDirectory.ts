export function FormatTargetDirectory(targetDir: string | undefined) {
  return targetDir?.trim().replace(/\/+$/g, "");
}
