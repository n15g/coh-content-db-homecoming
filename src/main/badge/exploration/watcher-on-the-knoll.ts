import { BadgeData, zoneLink } from 'coh-content-db'
import { NervaArchipelago } from '../../zone/nerva-archipelago'

export const WatcherOnTheKnoll: BadgeData = {
  type: 'exploration',
  key: 'watcher-on-the-knoll',
  setTitleId: [274],
  name: 'Watcher on the Knoll',
  morality: 'villainous',
  zoneKey: NervaArchipelago.key,
  loc: [-93, 85, 5434],
  badgeText: [{
    value: `A failed assassination on Ms. Liberty was made from the top of this pillar.`,
  }],
  notes: `
Located in ${zoneLink(NervaArchipelago)}, in the northernmost island of the Crimson Cove neighborhood.

The marker is located between the feet of the statue on the right (south) of the large building, on top of the plinth.`,
  links: [
    { title: 'Watcher on the Knoll Badge', href: 'https://homecoming.wiki/wiki/Watcher_on_the_Knoll_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png',
  vidiotMapKey: '1',
}
