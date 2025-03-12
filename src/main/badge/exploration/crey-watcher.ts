import { BadgeData } from 'coh-content-db'
import { CreysFolly } from '../../map/creys-folly'

export const CreyWatcher: BadgeData = {
  type: 'EXPLORATION',
  key: 'crey-watcher',
  setTitle: { id: 138 },
  name: [{ value: 'Crey Watcher' }],
  alignment: ['H'],
  mapKey: CreysFolly.key,
  loc: [1080, 0, 2320],
  badgeText: [{
    value: 'Crey\'s defensive measures against the Rikti brought about an environmental nightmare in this area, turning the neighborhood once called \'Venice\' into \'Crey\'s Folly.\'',
  }],
  notes: 'Located in [map:creys-folly] 230 yards west of the Crey Factories marker along the south side of a ditch.',
  links: [
    { title: 'Crey Watcher Badge', href: 'https://homecoming.wiki/wiki/Crey_Watcher_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png' }],
  vidiotMapKey: '1',
}
