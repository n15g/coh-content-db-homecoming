import { BadgeData } from 'coh-content-db'
import { EchoFaultline } from '../../zone/echo-faultline'

export const SpareParts: BadgeData = {
  type: 'exploration',
  key: 'spare-parts',
  setTitleId: [2402],
  name: 'Spare Parts',
  morality: 'heroic',
  badgeText: `Large groups of Vahzilok roam this area, day or night. Guided by the depraved Dr. Vahzilok, they defile the very laws of nature with their never ceasing desire for human flesh.`,
  zoneKey: EchoFaultline.key,
  loc: [446.7, 0.3, 1521.3],
  notes: 'Approx. 326 yrds. W from the "Resevoir" marker in a park above the crevice with the cement structures.',
  links: [
    { title: 'I25 Faultline badge changes', href: 'https://forums.homecomingservers.com/topic/931-echo-falutline-badger-hunter-helpline/' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png',
  vidiotMapKey: '7',
}
