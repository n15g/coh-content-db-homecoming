import { BadgeData } from 'coh-content-db'
import { EchoFaultline } from '../../zone/echo-faultline'

export const SpareParts: BadgeData = {
  type: 'exploration',
  key: 'spare-parts',
  setTitleId: [2402],
  name: 'Spare Parts',
  releaseDate: '2019-06-01',
  morality: 'paragon-city-access',
  badgeText: `Large groups of Vahzilok roam this area, day or night. Guided by the depraved Dr. Vahzilok, they defile the very laws of nature with their never ceasing desire for human flesh.`,
  notes: 'Located approx. 326 yrds. W from the "Reservoir" marker in a park above the crevice with the cement structures.',
  links: [
    { title: 'I25 Faultline badge changes', href: 'https://forums.homecomingservers.com/topic/931-echo-falutline-badger-hunter-helpline/' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: EchoFaultline.key, coords: [446.7, 0.3, 1521.3], icon: 'badge', iconText: '7' } },
  ],
}
