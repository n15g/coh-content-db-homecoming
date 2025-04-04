import { BadgeData, zoneLink } from 'coh-content-db'
import { AtlasPark } from '../../zone/atlas-park'

export const TopDog: BadgeData = {
  type: 'exploration',
  key: 'top-dog',
  setTitleId: [90],
  name: 'Top Dog',
  morality: 'heroic',
  zoneKey: AtlasPark.key,
  loc: [131, 320, -319.5],
  badgeText: [{
    value: 'The top of Atlas\' statue is the first place many flying heroes will go.',
  }],
  notes: `Located in the Atlas Plaza neighborhood of ${zoneLink(AtlasPark)}.

It is at the apex of the globe that the Atlas statue just in front of City Hall is holding.

Requires fly, superjump, or teleport, or to arrange to have another hero transport them to the badge marker.`,
  links: [
    { title: 'Top Dog Badge', href: 'https://homecoming.wiki/wiki/Top_Dog_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png',
  vidiotMapKey: '5',
}
