import { BadgeData } from 'coh-content-db'
import { NervaArchipelago } from '../../zone/nerva-archipelago'

export const Soother: BadgeData = {
  type: 'exploration',
  key: 'soother',
  setTitleId: [1503],
  name: 'Soother',
  releaseDate: '2012-11-30',
  morality: 'rogue-isles-access',
  badgeText: `The area behind this waterfall is said to be a secret spot where Scirocco goes to meditate during periods of stress.
Marks on the wall indicate a major brawl between Scirocco and Black Scorpion (most likely due to Black Scorpion making fun of Scirocco for meditating).`,
  notes: `Located in the Primeva neighborhood in a cave behind the waterfall 240 yards east of the neighborhood marker.`,
  links: [
    { title: 'Soother Badge', href: 'https://homecoming.wiki/wiki/Soother_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: NervaArchipelago.key, coords: [1236, 81, 1396], icon: 'badge', iconText: '8' } },
  ],
}
