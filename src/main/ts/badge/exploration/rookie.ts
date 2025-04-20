import { BadgeData, contactLink } from 'coh-content-db'
import { AtlasPark } from '../../zone/atlas-park'
import { MsLiberty } from '../../contact/ms-liberty'

export const Rookie: BadgeData = {
  type: 'exploration',
  key: 'rookie',
  setTitleId: [2025],
  name: 'Rookie',
  releaseDate: '2019-01-01',
  morality: 'paragon-city-access',
  badgeText: `Newly registered heroes in Paragon City often start out in Atlas Park, where they can speak with more established heroes to receive advice and guidance.`,
  notes: `Located behind ${contactLink(MsLiberty)}, who stands in front of the new character spawn point.`,
  links: [
    { title: 'Rookie Badge', href: 'https://homecoming.wiki/wiki/Rookie_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: AtlasPark.key, coords: [128.5, 16.4, -233], icon: 'badge', iconText: '4' } },
  ],
}
