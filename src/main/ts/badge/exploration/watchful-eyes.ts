import { BadgeData } from 'coh-content-db'
import { FoundersFalls } from '../../zone/founders-falls'

export const WatchfulEyes: BadgeData = {
  type: 'exploration',
  key: 'watchful-eyes',
  setTitleId: [1560],
  name: 'Watchful Eyes',
  morality: 'paragon-city-access',
  badgeText: `During her time in the Knives of Artemis, Agent Indigo used this spot to assassinate many of her targets.
She now presides over the area to remind herself of her past sins and to prevent the Knives from staining this area with any more blood.`,
  notes: `Located in the Hutchinson Park neighborhood, right next to where Indigo is standing, 325 yards east of the Eden gate.`,
  links: [
    { title: 'Watchful Eyes Badge', href: 'https://homecoming.wiki/wiki/Watchful_Eyes_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: FoundersFalls.key, coords: [4245, 261, 4572] }, vidiotMapKey: '5' },
  ],
}
