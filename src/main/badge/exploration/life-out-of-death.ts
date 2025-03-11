import { BadgeData } from 'coh-content-db'
import { DarkAstoria } from '../../map/dark-astoria'

export const LifeOutOfDeath: BadgeData = {
  type: 'EXPLORATION',
  key: 'life-out-of-death',
  setTitle: { id: 2185 },
  name: [{ value: 'Life out of Death' }],
  alignment: ['H', 'V', 'P'],
  mapKey: DarkAstoria.key,
  loc: [6197, 117, 2444],
  badgeText: [{
    value: `Mot's hunger is insatiable and its power to feast upon life is prodigious.
For sustenance, many innocent people have been spirited away into the haunted streets of Dark Astoria.
Not all who have been abducted have met their end, surviving against all odds.`,
  }],
  notes: `Located in [map:${DarkAstoria.key}], in the St. Elegius neighborhood, southwest of Romero Heights, and near The Bulwark.
78 yards north of the neighborhood marker, on top of the hospital.`,
  links: [
    { title: 'Life out of Death Badge', href: 'https://homecoming.wiki/wiki/Life_Out_of_Death_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png' }],
  vidiotMapKey: '7',
}
