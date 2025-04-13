import { BadgeData } from 'coh-content-db'
import { AtlasPark } from '../../zone/atlas-park'

export const Freedom: BadgeData = {
  type: 'exploration',
  key: 'freedom',
  setTitleId: [182],
  name: [
    { alignment: 'hero', value: 'Freedom' },
    { alignment: 'villain', value: 'Covert Operator' },
  ],
  morality: 'paragon-city-access',
  badgeText: `This flag was crafted from Statesman's cape and was donated to Paragon City to replace the flag destroyed by the invading Rikti.
It now flies over Paragon City Hall to honor the sacrifice made by Hero 1 and the rest of Omega Team.`,
  notes: `Located in the Atlas Plaza neighborhood, at the base of the flagpole on top of City Hall.`,
  links: [
    { title: 'Freedom Badge', href: 'https://homecoming.wiki/wiki/Freedom_Badge' },
    { title: 'Covert Operator Badge', href: 'https://homecoming.wiki/wiki/Covert_Operator_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: AtlasPark.key, coords: [126.1, 170.6, -652.4], icon: 'badge', iconText: '6' } },
  ],
}
