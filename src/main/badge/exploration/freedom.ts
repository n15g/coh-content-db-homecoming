import { BadgeData } from 'coh-content-db'
import { AtlasPark } from '../../map/atlas-park'

export const Freedom: BadgeData = {
  type: 'EXPLORATION',
  key: 'freedom',
  setTitle: { id: 182 },
  name: [
    { alignment: 'H', value: 'Freedom' },
    { alignment: 'V', value: 'Covert Operator' },
  ],
  alignment: ['H'],
  mapKey: AtlasPark.key,
  loc: [126.1, 170.6, -652.4],
  badgeText: [{
    value: 'This flag was crafted from Statesman\'s cape and was donated to Paragon City to replace the flag destroyed by the invading Rikti.'
      + ' It now flies over Paragon City Hall to honor the sacrifice made by Hero 1 and the rest of Omega Team.',
  }],
  notes: 'Located in the Atlas Plaza neighborhood of [map:atlas-park].\n'
    + '\n'
    + 'The badge marker is located at the base of the flagpole on top of City Hall.',
  links: [
    { title: 'Freedom Badge', href: 'https://homecoming.wiki/wiki/Freedom_Badge' },
    { title: 'Covert Operator Badge', href: 'https://homecoming.wiki/wiki/Covert_Operator_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' }],
  vidiotMapKey: '6',
}
