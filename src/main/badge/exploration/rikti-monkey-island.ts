import { BadgeData, mapLink } from 'coh-content-db'
import { MonsterIsland } from '../../map/monster-island'

export const RiktiMonkeyIsland: BadgeData = {
  type: 'EXPLORATION',
  key: 'rikti-monkey-island',
  setTitle: { id: 1870 },
  name: [{ value: 'Rikti Monkey Island' }],
  alignment: ['V'],
  mapKey: MonsterIsland.key,
  loc: [-2981, 0, -5449],
  badgeText: [{
    value: `There is a secret to this island of monkeys, that if an infinite number of Rikti Monkeys were placed before an infinite number of typewriters the smell
they'd produce would be unbearable.
It is nearly unbearable here; the Rikti Monkeys chattering non-stop, dropping dung wherever they please, and prancing about with that unnerving rapidity fills you with the urge to kill
every last one of them.
You're going to enjoy pulping their little bodies.`,
  }],
  notes: `Located in ${mapLink(MonsterIsland)}, 535 yards southeast of the Cutlass Isles marker, near the tallest tree on the small island in the southeast portion of the zone.`,
  links: [
    { title: 'Rikti Monkey Island Badge', href: 'https://homecoming.wiki/wiki/Rikti_Monkey_Island_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png' }],
  vidiotMapKey: '3',
}
