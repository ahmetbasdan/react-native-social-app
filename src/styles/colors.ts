const ColorAlpha = (color: string, alpha: number): string =>
  `${color}${Math.floor(alpha * 255).toString(16)}`;

const ColorDark = "#000000";
const ColorPrimary = "#25A0B0";
const ColorSecondary = "#E1F6F4";
const ColorWhite = "#FFFFFF";

export default {
  Dark: ColorDark,
  Dark5: "rgba(31, 31, 31, 0.05)",
  Dark10: ColorAlpha(ColorDark, 0.1),
  Dark20: ColorAlpha(ColorDark, 0.2),
  Dark30: ColorAlpha(ColorDark, 0.3),
  Dark40: ColorAlpha(ColorDark, 0.4),
  Dark50: ColorAlpha(ColorDark, 0.5),
  Dark60: ColorAlpha(ColorDark, 0.6),
  Dark70: ColorAlpha(ColorDark, 0.7),

  White: ColorWhite,
  White60: ColorAlpha(ColorWhite, 0.6),

  Red: "#F00",
  WhiteGray: "#C4C4C4",
  Disable: "rgba(54, 168, 252, 0.5);",
  Gray: "#4E4E4E",
  Green: "#4CAF50",
  DarkBlue: "#0B276A",
  InputDisable: "#F5F6F8",
  OverlayColor: "#F5F6FA",

  Silver: "#8c8b87",
  Gold: "#f7d800",
  Master: "#5e00a0",

  Primary: ColorPrimary,
  PrimaryDisable: "#C0CCDF",
  Secondary: ColorSecondary,
  PassivePrimary: "#B2D7FF",
  Border: "#eaebe5",

  Success: "#5abb62",
  Warning: "#f2994a",
  Danger: "#eb5757",
};
