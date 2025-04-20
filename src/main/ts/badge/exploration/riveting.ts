import { BadgeData } from 'coh-content-db'
import { Faultline } from '../../zone/faultline'

export const Riveting: BadgeData = {
  type: 'exploration',
  key: 'riveting',
  setTitleId: [2404],
  name: 'Riveting',
  releaseDate: '2019-06-01',
  morality: 'paragon-city-access',
  badgeText: `The Rusty Rivet, a local tavern, caters to construction crews.
Unfortunately, this is also where large brawls between The Lost and anyone within the area tend to break out.
Paragon Police are frequently called in to settle disputes.`,
  notes: 'Located in the NW Corner of the map 70 yds NW of Mirror Spirit in front of the The Rusty Rivet bar.',
  links: [
    { title: 'I25 Faultline badge changes', href: 'https://forums.homecomingservers.com/topic/931-echo-falutline-badger-hunter-helpline/' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: Faultline.key, coords: [1261, 31, -1788], icon: 'badge', iconText: '5' } },
  ],
}
