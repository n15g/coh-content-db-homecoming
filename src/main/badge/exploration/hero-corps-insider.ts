import { BadgeData, zoneLink } from 'coh-content-db'
import { AtlasPark } from '../../zone/atlas-park'

export const HeroCorpsInsider: BadgeData = {
  type: 'EXPLORATION',
  key: 'hero-corps-insider',
  setTitle: { id: 88 },
  name: [
    { alignment: 'H', value: 'Hero Corps Insider' },
    { alignment: 'V', value: 'Hero Corps Infiltrator' },
  ],
  alignment: ['H'],
  zoneKey: AtlasPark.key,
  loc: [284, 16, -884],
  badgeText: [{
    value: 'Hero Corps may be controversial in their methods but they can have good information for aspiring heroes.',
  }],
  notes: `Located in the Atlas Plaza neighborhood of ${zoneLink(AtlasPark)} on the ground in front of Henry Peter Wong.

Henry is behind and to the left (northwest) of City Hall, just behind a large statue approximately halfway between City Hall and the Paragon City Monorail station.`,
  links: [
    { title: 'Hero Corps Insider Badge', href: 'https://homecoming.wiki/wiki/Hero_Corps_Insider_Badge' },
    { title: 'Hero Corps Infiltrator Badge', href: 'https://homecoming.wiki/wiki/Hero_Corps_Infiltrator_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' }],
  vidiotMapKey: '3',
}
