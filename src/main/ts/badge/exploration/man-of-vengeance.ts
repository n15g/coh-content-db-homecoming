import { BadgeData } from 'coh-content-db'
import { KingsRow } from '../../zone/kings-row'

export const ManOfVengeance: BadgeData = {
  type: 'exploration',
  key: 'man-of-vengeance',
  setTitleId: [1528],
  name: [
    { sex: 'M', value: 'Man of Vengeance' },
    { sex: 'F', value: 'Woman of Vengeance' },
  ],
  releaseDate: '2012-11-30',
  morality: 'paragon-city-access',
  badgeText: `This is the wreckage of a warehouse owned by the Family.
The man who killed Blue Steel's father was rumored to be taking shelter here.
Blue Steel went to investigate, only to discover the Family had rigged the warehouse to explode.
Blue Steel survived the explosion and has continued the hunt for his father's killer to this day.`,
  notes: 'Located at the entrance of the vacant rubble lot 110 yards west of the PPD building (Detective Becktrees or Detective Freitag markers).',
  links: [
    { title: 'Man of Vengeance Badge', href: 'https://homecoming.wiki/wiki/Man_of_Vengeance_Badge' },
    { title: 'Woman of Vengeance Badge', href: 'https://homecoming.wiki/wiki/Woman_of_Vengeance_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: KingsRow.key, coords: [573, -42, 704], icon: 'badge', iconText: '8' } },
  ],
}
