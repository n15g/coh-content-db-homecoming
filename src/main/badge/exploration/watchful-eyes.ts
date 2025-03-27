import { BadgeData, mapLink } from 'coh-content-db'
import { FoundersFalls } from '../../map/founders-falls'

export const WatchfulEyes: BadgeData = {
  type: 'EXPLORATION',
  key: 'watchful-eyes',
  setTitle: { id: 1560 },
  name: [{ value: 'Watchful Eyes' }],
  alignment: ['H'],
  mapKey: FoundersFalls.key,
  loc: [4245, 261, 4572],
  badgeText: [{
    value: 'During her time in the Knives of Artemis, Agent Indigo used this spot to assassinate many of her targets.'
      + ' She now presides over the area to remind herself of her past sins and to prevent the Knives from staining this area with any more blood.',
  }],
  notes: `Located in the Hutchinson Park neighborhood of ${mapLink(FoundersFalls)}, right next to where Indigo is standing, 325 yards east of the Eden gate.`,
  links: [
    { title: 'Watchful Eyes Badge', href: 'https://homecoming.wiki/wiki/Watchful_Eyes_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' }],
  vidiotMapKey: '5',
}
