import { BadgeData } from 'coh-content-db'
import { Faultline } from '../../zone/faultline'

export const Undammed: BadgeData = {
  type: 'exploration',
  key: 'undammed',
  setTitleId: [118],
  name: 'Undammed',
  releaseDate: '2012-11-30',
  morality: 'paragon-city-access',
  badgeText: 'Funding has recently been passed in an effort to stop the damage caused by the leaking Paragon City Dam.',
  notes: `Located at the northeast corner of a building in a canyon on the east side of the zone, between the Aftershock and Overflow neighborhoods.`,
  links: [
    { title: 'Undammed Badge', href: 'https://homecoming.wiki/wiki/Undammed_Badge' },
    { title: 'I25 Faultline badge changes', href: 'https://forums.homecomingservers.com/topic/931-echo-falutline-badger-hunter-helpline/' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: Faultline.key, coords: [-820, -159, 1033], icon: 'badge', iconText: '1' } },
  ],
}
