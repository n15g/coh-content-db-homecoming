import { BadgeData } from 'coh-content-db'
import { TalosIsland } from '../../zone/talos-island'

export const NatureLover: BadgeData = {
  type: 'exploration',
  key: 'nature-lover',
  setTitleId: [126],
  name: [
    { alignment: 'hero', value: 'Nature Lover' },
    { alignment: 'villain', value: 'Eco-warrior' },
  ],
  morality: 'heroic',
  zoneKey: TalosIsland.key,
  loc: [2672, 124, 9117],
  badgeText: `Mechanus was one of Woodsman's greatest enemies.
It was on this spot that the champion of nature defeated the artificially intelligent robot for the final time.`,
  notes: `Located in the western Argo Highway neighborhood, 874 yards west of the neighborhood marker. The badge is on the island split by the western war wall, just east of the central rock outcropping.`,
  links: [
    { title: 'Nature Lover Badge', href: 'https://homecoming.wiki/wiki/Nature_Lover_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png',
  vidiotMapKey: '2',
}
