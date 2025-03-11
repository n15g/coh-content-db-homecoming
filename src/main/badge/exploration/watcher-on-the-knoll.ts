import { BadgeData } from 'coh-content-db'
import { NervaArchipelago } from '../../map/nerva-archipelago'

export const WatcherOnTheKnoll: BadgeData = {
  type: 'EXPLORATION',
  key: 'watcher-on-the-knoll',
  setTitle: { id: 274 },
  name: [{ value: 'Watcher on the Knoll' }],
  alignment: ['V'],
  mapKey: NervaArchipelago.key,
  loc: [-93, 85, 5434],
  badgeText: [{
    value: `A failed assassination on Ms. Liberty was made from the top of this pillar.`,
  }],
  notes: `Located in [map:${NervaArchipelago.key}], in the northernmost island of the Crimson Cove neighborhood.

The marker is located between the feet of the statue on the right (south) of the large building, on top of the plinth.`,
  links: [
    { title: 'Watcher on the Knoll Badge', href: 'https://homecoming.wiki/wiki/Watcher_on_the_Knoll_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png' }],
  vidiotMapKey: '1',
}
