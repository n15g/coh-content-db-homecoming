import { BadgeData } from 'coh-content-db'
import { Faultline } from '../../zone/faultline'

export const RockBottom: BadgeData = {
  type: 'exploration',
  key: 'rock-bottom',
  setTitleId: [2406],
  name: 'Rock Bottom',
  releaseDate: '2019-06-01',
  morality: 'paragon-city-access',
  badgeText: `This dumping ground is also a hideout for The Lost, within the mounds of refuse.
Freakshow have been known to make their way over, looking for spare parts and causing trouble for the ranks of the poor and the homeless, forcing them to accept further mutations to protect themselves.`,
  notes: 'Located along the east zone wall, in the junkyard with the Lost, down a dirt ramp under the building.',
  links: [
    { title: 'I25 Faultline badge changes', href: 'https://forums.homecomingservers.com/topic/931-echo-falutline-badger-hunter-helpline/' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: Faultline.key, coords: [-706.6, -87.8, 1757], icon: 'badge', iconText: '7' } },
  ],
}
