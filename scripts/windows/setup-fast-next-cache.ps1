Param(
  # Куда перенести кэш .next (по умолчанию LocalAppData)
  [string]$CacheRoot = "$env:LOCALAPPDATA\\NextCache\\POCHU-PKT"
)

$ErrorActionPreference = "Stop"

$projectRoot = (Resolve-Path (Join-Path $PSScriptRoot "..\\..")).Path
$nextDir = Join-Path $projectRoot ".next"
$target = Join-Path $CacheRoot ".next"

Write-Host "Project:" $projectRoot
Write-Host "Next dir:" $nextDir
Write-Host "Target :" $target

# Создаём папку под кэш
New-Item -ItemType Directory -Force -Path $CacheRoot | Out-Null

# Если .next уже есть и это НЕ junction — перенесём его содержимое в target
if (Test-Path $nextDir) {
  $item = Get-Item $nextDir -Force
  $isReparsePoint = ($item.Attributes -band [IO.FileAttributes]::ReparsePoint) -ne 0

  if (-not $isReparsePoint) {
    New-Item -ItemType Directory -Force -Path $target | Out-Null
    Write-Host "Moving existing .next contents to cache target..."
    Copy-Item -Path (Join-Path $nextDir "*") -Destination $target -Recurse -Force -ErrorAction SilentlyContinue
    Remove-Item -Path $nextDir -Recurse -Force
  } else {
    Write-Host ".next is already a junction/symlink. Skipping removal."
  }
}

# Создаём junction .next -> target
if (-not (Test-Path $target)) {
  New-Item -ItemType Directory -Force -Path $target | Out-Null
}

if (-not (Test-Path $nextDir)) {
  New-Item -ItemType Junction -Path $nextDir -Target $target | Out-Null
  Write-Host "Created junction: .next -> $target"
} else {
  $item = Get-Item $nextDir -Force
  $isReparsePoint = ($item.Attributes -band [IO.FileAttributes]::ReparsePoint) -ne 0
  if ($isReparsePoint) {
    Write-Host "OK: .next is already a junction/symlink."
  } else {
    throw ".next still exists as a normal folder. Close dev server and retry."
  }
}

Write-Host ""
Write-Host "Done. Now run: pnpm run dev"
