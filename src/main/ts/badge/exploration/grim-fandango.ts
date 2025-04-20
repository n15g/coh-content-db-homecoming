import { BadgeData } from 'coh-content-db'
import { MonsterIsland } from '../../zone/monster-island'

export const GrimFandango: BadgeData = {
  type: 'exploration',
  key: 'grim-fandango',
  setTitleId: [1873],
  name: 'Grim Fandango',
  releaseDate: '2012-11-30',
  morality: 'rogue-isles-access',
  badgeText: `You've read the briefs describing how hordes of Rikti Monkeys had been observed taking down much, much larger game and now you have found evidence to support that thesis.
Rikti monkeys dance among the bones, playing strange, captivating rhythms upon them, delighting in their accomplishment.
Then they turn their gaze upon you, sizing you up, and you imagine that they're wondering just what your ribcage would sound like played like a xylophone, your kneecaps clapped like castanets,
and what your skull would look like smeared with Rikti Monkey dung.`,
  notes: `Located 280 yards southwest of the Cutlass Isles marker, next to a large pile of bones.`,
  links: [
    { title: 'Grim Fandango Badge', href: 'https://homecoming.wiki/wiki/Grim_Fandango_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: MonsterIsland.key, coords: [-1498, 0, -6344], icon: 'badge', iconText: '6' } },
  ],
}
