import { BadgeData } from 'coh-content-db'
import { TheHollows } from '../../zone/the-hollows'

export const GanglandFury: BadgeData = {
  type: 'exploration',
  key: 'gangland-fury',
  setTitleId: [199],
  name: 'Gangland Fury',
  morality: 'paragon-city-access',
  badgeText: `Since the Hollowing, these streets have turned into a war zone between the Trolls and the Outcasts. Only the constant vigilance of heroes keeps this conflict from turning into a bloodbath.`,
  notes: '187 yards South of Four Seasons marker.',
  links: [
    { title: 'Gangland Fury Badge', href: 'https://homecoming.wiki/wiki/Gangland_Fury_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: TheHollows.key, coords: [-728, -11, -3518], icon: 'badge', iconText: '5' } },
  ],
}
