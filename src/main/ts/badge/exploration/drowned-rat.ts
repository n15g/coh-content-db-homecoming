import { BadgeData } from 'coh-content-db'
import { Faultline } from '../../zone/faultline'

export const DrownedRat: BadgeData = {
  type: 'exploration',
  key: 'drowned-rat',
  setTitleId: [637],
  name: 'Drowned Rat',
  releaseDate: '2012-11-30',
  morality: 'paragon-city-access',
  badgeText: [
    { alignment: 'hero', value: `The dam burst here due to exceptionally strong seismic activity.` },
    { alignment: 'villain', value: `This marks the location that the dam burst due to exceptionally strong seismic activity.` },
  ],
  notes: `Located in the Overflow neighborhood, on scaffolding against the dam just above a large leak in its face.`,
  links: [
    { title: 'Drowned Rat Badge', href: 'https://homecoming.wiki/wiki/Drowned_Rat_Badge' },
    { title: 'I25 Faultline badge changes', href: 'https://forums.homecomingservers.com/topic/931-echo-falutline-badger-hunter-helpline/' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: Faultline.key, coords: [150, -51, 2360], icon: 'badge', iconText: '3' } },
  ],
}
