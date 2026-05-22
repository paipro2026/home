#!/usr/bin/env python3
"""Generate English splash-screen variants from Chinese originals."""

from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[1]
IMG_DIR = ROOT / "assets" / "images"

W, H = 575, 1280

# macOS system fonts (fallback chain in load_font)
FONT_CANDIDATES = {
    "title": [
        "/System/Library/Fonts/Supplemental/Georgia Bold.ttf",
        "/System/Library/Fonts/Supplemental/Georgia.ttf",
        "/Library/Fonts/Arial Unicode.ttf",
    ],
    "body": [
        "/System/Library/Fonts/Supplemental/Georgia.ttf",
        "/System/Library/Fonts/Helvetica.ttc",
    ],
    "button": [
        "/System/Library/Fonts/Helvetica.ttc",
        "/System/Library/Fonts/SFNSText.ttf",
    ],
}

SCREENS = [
    {
        "src": "splash-screen-1.jpg",
        "dst": "splash-screen-1-en.jpg",
        "title": "Breathe",
        "subtitle": "Find inner peace in every breath.",
        "title_size": 52,
        "body_size": 22,
        "text_top": 600,
        "text_bottom": 860,
        "button": None,
    },
    {
        "src": "splash-screen-2.jpg",
        "dst": "splash-screen-2-en.jpg",
        "title": "Relax",
        "subtitle": "Release the day's fatigue and let your body return to nature.",
        "title_size": 52,
        "body_size": 20,
        "text_top": 600,
        "text_bottom": 880,
        "button": None,
    },
    {
        "src": "splash-screen-3.jpg",
        "dst": "splash-screen-3-en.jpg",
        "title": "Sleep",
        "subtitle": "Fall asleep peacefully to gentle white noise.",
        "title_size": 52,
        "body_size": 22,
        "text_top": 600,
        "text_bottom": 860,
        "button": "Get Started",
    },
]


def load_font(kind: str, size: int) -> ImageFont.FreeTypeFont | ImageFont.ImageFont:
    for path in FONT_CANDIDATES[kind]:
        p = Path(path)
        if p.exists():
            try:
                return ImageFont.truetype(str(p), size)
            except OSError:
                continue
    return ImageFont.load_default()


def wrap_text(draw: ImageDraw.ImageDraw, text: str, font, max_width: int) -> list[str]:
    words = text.split()
    lines: list[str] = []
    current: list[str] = []
    for word in words:
        trial = " ".join(current + [word])
        bbox = draw.textbbox((0, 0), trial, font=font)
        if bbox[2] - bbox[0] <= max_width:
            current.append(word)
        else:
            if current:
                lines.append(" ".join(current))
            current = [word]
    if current:
        lines.append(" ".join(current))
    return lines or [text]


def draw_centered_block(
    draw: ImageDraw.ImageDraw,
    title: str,
    subtitle: str,
    title_font,
    body_font,
    y_start: int,
    max_width: int = 480,
    line_gap: int = 12,
) -> int:
    title_bbox = draw.textbbox((0, 0), title, font=title_font)
    title_h = title_bbox[3] - title_bbox[1]
    tw = title_bbox[2] - title_bbox[0]
    draw.text(((W - tw) / 2, y_start), title, fill=(255, 255, 255), font=title_font)
    y = y_start + title_h + 28

    lines = wrap_text(draw, subtitle, body_font, max_width)
    for line in lines:
        bb = draw.textbbox((0, 0), line, font=body_font)
        lw = bb[2] - bb[0]
        lh = bb[3] - bb[1]
        draw.text(((W - lw) / 2, y), line, fill=(230, 230, 230), font=body_font)
        y += lh + line_gap
    return y


def draw_button(draw: ImageDraw.ImageDraw, label: str, font) -> None:
    pad_x, pad_y = 28, 14
    bbox = draw.textbbox((0, 0), label, font=font)
    tw, th = bbox[2] - bbox[0], bbox[3] - bbox[1]
    bw, bh = tw + pad_x * 2, th + pad_y * 2
    x = W - bw - 36
    y = H - bh - 108
    draw.rounded_rectangle((x, y, x + bw, y + bh), radius=bh // 2, fill=(255, 255, 255))
    draw.text((x + pad_x, y + pad_y - 2), label, fill=(0, 0, 0), font=font)


def process_screen(cfg: dict) -> None:
    src = IMG_DIR / cfg["src"]
    dst = IMG_DIR / cfg["dst"]
    im = Image.open(src).convert("RGB")
    draw = ImageDraw.Draw(im)

    # Cover Chinese title + subtitle
    draw.rectangle((24, cfg["text_top"], W - 24, cfg["text_bottom"]), fill=(0, 0, 0))

    title_font = load_font("title", cfg["title_size"])
    body_font = load_font("body", cfg["body_size"])

    draw_centered_block(
        draw,
        cfg["title"],
        cfg["subtitle"],
        title_font,
        body_font,
        y_start=cfg["text_top"] + 36,
    )

    if cfg["button"]:
        # Cover Chinese CTA pill
        draw.rectangle((W - 220, H - 200, W - 20, H - 80), fill=(0, 0, 0))
        btn_font = load_font("button", 20)
        draw_button(draw, cfg["button"], btn_font)

    im.save(dst, "JPEG", quality=92, optimize=True)
    print(f"Wrote {dst}")


def main() -> None:
    for cfg in SCREENS:
        process_screen(cfg)


if __name__ == "__main__":
    main()
