import { BadgeData } from 'coh-content-db'
import { AtlasPark } from '../../map/atlas-park'

export const TopDog: BadgeData = {
  type: 'EXPLORATION',
  key: 'top-dog',
  setTitle: { id: 90 },
  name: [{ value: 'Top Dog' }],
  alignment: ['H'],
  mapKey: AtlasPark.key,
  loc: [131, 320, -319.5],
  badgeText: [{
    value: 'The top of Atlas\' statue is the first place many flying heroes will go.',
  }],
  notes: 'Located in the Atlas Plaza neighborhood of [map:atlas-park].\n'
    + '\n'
    + 'It is at the apex of the globe that the Atlas statue just in front of City Hall is holding.\n'
    + '\n'
    + 'Requires fly, superjump, or teleport, or to arrange to have another hero transport them to the badge marker.',
  links: [
    { title: 'Top Dog Badge', href: 'https://homecoming.wiki/wiki/Top_Dog_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' }],
  vidiotMapKey: '5',
}
