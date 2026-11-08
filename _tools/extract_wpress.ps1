# Extractor del formato .wpress (All-in-One WP Migration)
# Uso: powershell -File extract_wpress.ps1 <archivo.wpress> <carpeta_destino>
param(
    [Parameter(Mandatory=$true)][string]$Wpress,
    [Parameter(Mandatory=$true)][string]$Dest
)

$fs = [System.IO.File]::OpenRead($Wpress)
$total = $fs.Length
$buf = New-Object byte[] 512
$count = 0
$skipPatterns = @('^wp-content/plugins/', '^wp-content/updraft/', '\.zip$', '\.wpress$')

while ($true) {
    $read = $fs.Read($buf, 0, 512)
    if ($read -lt 512) { break }

    # nombre: bytes hasta el primer 0 en 0..499
    $nameEnd = [Array]::IndexOf($buf, [byte]0)
    if ($nameEnd -le 0) { throw "Header corrupto en offset $($fs.Position - 512)" }
    $name = [System.Text.Encoding]::UTF8.GetString($buf, 0, $nameEnd)

    # tamaño: int64 LE en offset 500; mtime: uint32 en offset 508
    $size = [BitConverter]::ToInt64($buf, 500)
    $mtime = [BitConverter]::ToUInt32($buf, 508)
    $mtimeDate = [DateTimeOffset]::FromUnixTimeSeconds($mtime).LocalDateTime

    if ($size -lt 0 -or ($fs.Position + $size) -gt $total) { throw "Tamaño incoherente para $name" }

    $skip = $false
    foreach ($p in $skipPatterns) { if ($name -match $p) { $skip = $true; break } }

    if (-not $skip) {
        $outPath = Join-Path $Dest ($name -replace '/', '\')
        $outDir = Split-Path $outPath -Parent
        if ($outDir) { New-Item -ItemType Directory -Force -Path $outDir | Out-Null }
        $ofs = [System.IO.File]::Create($outPath)
        $remaining = $size
        $chunk = New-Object byte[] (1MB)
        while ($remaining -gt 0) {
            $toRead = [Math]::Min($remaining, $chunk.Length)
            $r = $fs.Read($chunk, 0, $toRead)
            if ($r -le 0) { throw "Archivo truncado leyendo $name" }
            $ofs.Write($chunk, 0, $r)
            $remaining -= $r
        }
        $ofs.Close()
        if ($mtime -gt 0) { (Get-Item $outPath).LastWriteTime = $mtimeDate }
        $count++
        if ($count % 200 -eq 0) {
            Write-Host ("{0} archivos... {1:P1} ({2})" -f $count, ($fs.Position / $total), $name)
        }
    } else {
        # saltar datos
        $remaining = $size
        $chunk = New-Object byte[] (1MB)
        while ($remaining -gt 0) {
            $toRead = [Math]::Min($remaining, $chunk.Length)
            $r = $fs.Read($chunk, 0, $toRead)
            if ($r -le 0) { throw "Archivo truncado saltando $name" }
            $remaining -= $r
        }
    }
}
$fs.Close()
Write-Host "COMPLETO: $count archivos extraidos en $Dest"
