import { BadgeData } from 'coh-content-db'
import { CreysFolly } from '../../zone/creys-folly'

export const CreyWatcher: BadgeData = {
  type: 'exploration',
  key: 'crey-watcher',
  setTitleId: [138],
  name: 'Crey Watcher',
  morality: 'paragon-city-access',
  badgeText: `Crey's defensive measures against the Rikti brought about an environmental nightmare in this area, turning the neighborhood once called 'Venice' into 'Crey's Folly.'`,
  notes: `Located 230 yards west of the Crey Factories marker along the south side of a ditch.`,
  links: [
    { title: 'Crey Watcher Badge', href: 'https://homecoming.wiki/wiki/Crey_Watcher_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: CreysFolly.key, coords: [1080, 0, 2320] }, vidiotMapKey: '1' },
  ],
}
