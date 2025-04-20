import { BadgeData } from 'coh-content-db'
import { ReclusesVictory } from '../../zone/recluses-victory'

export const LastStand: BadgeData = {
  type: 'exploration',
  key: 'last-stand',
  setTitleId: [290],
  name: 'Last Stand',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: 'Lee Towers may go down in history as the place where civilization fell to Lord Recluse.',
  notes: `Located in Sector 2, beneath the monorail track behind a store roughly midway between the Foxtrot and Golf pillboxes—slightly closer to Foxtrot.`,
  links: [
    { title: 'Last Stand Badge', href: 'https://homecoming.wiki/wiki/Last_Stand_Badge' },
  ],
  icon: [
    { alignment: 'hero', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' },
    { alignment: 'villain', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png' },
  ],
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: ReclusesVictory.key, coords: [1083, 0, -136], icon: 'badge', iconText: '4' } },
  ],
}
