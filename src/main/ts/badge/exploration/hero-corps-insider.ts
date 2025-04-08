import { BadgeData } from 'coh-content-db'
import { AtlasPark } from '../../zone/atlas-park'

export const HeroCorpsInsider: BadgeData = {
  type: 'exploration',
  key: 'hero-corps-insider',
  setTitleId: [88],
  name: [
    { alignment: 'hero', value: 'Hero Corps Insider' },
    { alignment: 'villain', value: 'Hero Corps Infiltrator' },
  ],
  morality: 'paragon-city-access',
  badgeText: `Hero Corps may be controversial in their methods but they can have good information for aspiring heroes.`,
  notes: `Located in the Atlas Plaza neighborhood, on the ground in front of Henry Peter Wong.

Henry is behind and to the left (northwest) of City Hall, just behind a large statue approximately halfway between City Hall and the Paragon City Monorail station.`,
  links: [
    { title: 'Hero Corps Insider Badge', href: 'https://homecoming.wiki/wiki/Hero_Corps_Insider_Badge' },
    { title: 'Hero Corps Infiltrator Badge', href: 'https://homecoming.wiki/wiki/Hero_Corps_Infiltrator_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: AtlasPark.key, coords: [284, 16, -884] }, vidiotMapKey: '3' },
  ],
}
