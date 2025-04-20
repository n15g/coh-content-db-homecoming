import { BadgeData } from 'coh-content-db'
import { NervaArchipelago } from '../../zone/nerva-archipelago'

export const WatcherOnTheKnoll: BadgeData = {
  type: 'exploration',
  key: 'watcher-on-the-knoll',
  setTitleId: [274],
  name: 'Watcher on the Knoll',
  releaseDate: '2012-11-30',
  morality: 'rogue-isles-access',
  badgeText: `A failed assassination on Ms. Liberty was made from the top of this pillar.`,
  notes: `Located on the northernmost island of Crimson Cove, between the feet of the southern statue in front of the large building, atop the plinth.`,
  links: [
    { title: 'Watcher on the Knoll Badge', href: 'https://homecoming.wiki/wiki/Watcher_on_the_Knoll_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: NervaArchipelago.key, coords: [-93, 85, 5434], icon: 'badge', iconText: '1' } },
  ],
}
