
from pathlib import Path
from PIL import Image, ImageOps

source = Path("src/assets/images")
output = Path("optimized_images")

extensions = {".jpg", ".jpeg", ".png"}
max_dimension = 1600
quality = 82

total_before = 0
total_after = 0
count = 0

for file in source.rglob("*"):
    if not file.is_file() or file.suffix.lower() not in extensions:
        continue

    try:
        with Image.open(file) as original:
            image = ImageOps.exif_transpose(original)
            image.thumbnail(
                (max_dimension, max_dimension),
                Image.Resampling.LANCZOS,
            )

            if image.mode not in ("RGB", "RGBA"):
                image = image.convert("RGBA" if "transparency" in image.info else "RGB")

            relative = file.relative_to(source)
            destination = (output / relative).with_suffix(".webp")
            destination.parent.mkdir(parents=True, exist_ok=True)

            image.save(
                destination,
                "WEBP",
                quality=quality,
                method=6,
            )

        before = file.stat().st_size
        after = destination.stat().st_size

        total_before += before
        total_after += after
        count += 1

        print(
            f"{relative}: "
            f"{before / 1024:.0f} KB -> {after / 1024:.0f} KB"
        )

    except Exception as error:
        print(f"Skipped {file}: {error}")

print(f"\nImages processed: {count}")
print(f"Original total: {total_before / 1024 / 1024:.2f} MB")
print(f"Optimized total: {total_after / 1024 / 1024:.2f} MB")
if total_before:
    saved = (1 - total_after / total_before) * 100
    print(f"Space saved: {saved:.1f}%")
print(f"Optimized files: {output.resolve()}")
