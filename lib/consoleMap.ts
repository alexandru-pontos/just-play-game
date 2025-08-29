export const CONSOLE_NAME_BY_SLUG: Record<string, string> = {
  ps2: "PlayStation 2",
  gamecube: "GameCube",
};

export const resolveConsoleName = (slug: string) =>
  CONSOLE_NAME_BY_SLUG[slug] ?? slug;
