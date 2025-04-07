import { BadgeData } from 'coh-content-db'
import { TheHive } from '../../zone/the-hive'

export const BabeInTheWoods: BadgeData = {
  type: 'exploration',
  key: 'babe-in-the-woods',
  setTitleId: [1848],
  name: 'Babe in the Woods',
  morality: 'heroic',
  zoneKey: TheHive.key,
  loc: [-2071, 0, -746],
  badgeText: `Hulking spires of stone splinter the landscape all around you, at this, the outermost edge of The Hive.
So this is what a world re-shaped by the Devouring Earth would look like—a place completely inhospitable to humanity, a land rendered hostile to your very presence.
You overcome a sudden feeling of insignificance as you gaze upon Hamidon's creation.`,
  notes: `Located 144 yards west and a bit north of the Eden transfer point, near the middle of the valley leading into the zone.`,
  links: [
    { title: 'Babe in the Woods Badge', href: 'https://homecoming.wiki/wiki/Babe_in_the_Woods_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png',
  vidiotMapKey: '3',
}
