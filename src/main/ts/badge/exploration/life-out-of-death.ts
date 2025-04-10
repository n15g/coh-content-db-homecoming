import { BadgeData } from 'coh-content-db'
import { DarkAstoria } from '../../zone/dark-astoria'

export const LifeOutOfDeath: BadgeData = {
  type: 'exploration',
  key: 'life-out-of-death',
  setTitleId: [2185],
  name: 'Life out of Death',
  morality: 'all',
  badgeText: `Mot's hunger is insatiable and its power to feast upon life is prodigious.
For sustenance, many innocent people have been spirited away into the haunted streets of Dark Astoria.
Not all who have been abducted have met their end, surviving against all odds.`,
  notes: `Located in the St. Elegius neighborhood, southwest of Romero Heights and near The Bulwark. The badge is 78 yards north of the neighborhood marker, atop the hospital.`,
  links: [
    { title: 'Life out of Death Badge', href: 'https://homecoming.wiki/wiki/Life_Out_of_Death_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: DarkAstoria.key, coords: [6197, 117, 2444], icon: 'badge', iconText: '7' } },
  ],
}
