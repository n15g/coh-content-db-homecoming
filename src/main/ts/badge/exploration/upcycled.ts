import { BadgeData } from 'coh-content-db'
import { Faultline } from '../../zone/faultline'

export const Upcycled: BadgeData = {
  type: 'exploration',
  key: 'upcycled',
  setTitleId: [2405],
  name: 'Upcycled',
  morality: 'paragon-city-access',
  badgeText: `The Ace Storage facility is where important wreckage that has been retrieved from Aftershock and Overflow is stored.
Crates, barrels, and transport vehicles litter the large lot. The Freakshow have started upcycling some of these materials for their own purposes.`,
  notes: 'Located in the southwest corner of the map, on top of a tower in the Freakshow camp, just outside the reservoir.',
  links: [
    { title: 'I25 Faultline badge changes', href: 'https://forums.homecomingservers.com/topic/931-echo-falutline-badger-hunter-helpline/' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: Faultline.key, coords: [932.8, 48, 2175], icon: 'badge', iconText: '6' } },
  ],
}
