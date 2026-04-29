export const PLAYER_PROFILE_KEY = "alien-armory-defense-profile";

export function createDefaultProfile() {
  return {
    level: 1,
    xp: 0,
    skillPoints: 0,
  };
}

export function xpNeeded(level) {
  return 100 + (level - 1) * 45;
}
