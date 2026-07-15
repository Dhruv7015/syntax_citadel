import forest from '@/data/levels/forest';
import iceworld from '@/data/levels/iceworld';
import desert from '@/data/levels/desert';
import ocean from '@/data/levels/ocean';
import volcano from '@/data/levels/volcano';
import sky from '@/data/levels/sky';
import cave from '@/data/levels/cave';
import swamp from '@/data/levels/swamp';
import tundra from '@/data/levels/tundra';
import space from '@/data/levels/space';

const WORLD_LEVELS = { forest, iceworld, desert, ocean, volcano, sky, cave, swamp, tundra, space };
export function getLevelData(world, levelId) {
  const levels = WORLD_LEVELS[world];
  if (!levels) return null;

  // Convert levelId to a number (e.g. "1" -> 1)
  const numericId = Number(levelId);

  // 1. If your world levels is an Array (e.g., [ level1, level2 ])
  if (Array.isArray(levels)) {
    // Find the level where the level property equals numericId
    return levels.find(l => l.level === numericId) || levels[numericId - 1] || null;
  }

  // 2. If your world levels is a Map/Object
  return levels[numericId] || levels[levelId] || null;
}