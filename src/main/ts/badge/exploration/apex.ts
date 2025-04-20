import { BadgeData } from 'coh-content-db'
import { EchoFaultline } from '../../zone/echo-faultline'

export const Apex: BadgeData = {
  type: 'exploration',
  key: 'apex',
  setTitleId: [121],
  name: 'Apex',
  releaseDate: '2012-11-30',
  morality: 'paragon-city-access',
  badgeText: `Apex tracked Dr. Vahzilok down to this location, but interference from the Circle of Thorns prevented him from capturing the mad scientist.`,
  notes: `Approx. 140 yrds SW of the "Subduction" marker on top of a parking structure.`,
  links: [
    { title: 'I25 Faultline badge changes', href: 'https://forums.homecomingservers.com/topic/931-echo-falutline-badger-hunter-helpline/' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: EchoFaultline.key, coords: [277.7, 57.1, -2257.8], icon: 'badge', iconText: '3' } },
  ],
}
