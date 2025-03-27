import { BadgeData, mapLink } from 'coh-content-db'
import { NervaArchipelago } from '../../map/nerva-archipelago'

export const Soother: BadgeData = {
  type: 'EXPLORATION',
  key: 'soother',
  setTitle: { id: 1503 },
  name: [{ value: 'Soother' }],
  alignment: ['V'],
  mapKey: NervaArchipelago.key,
  loc: [1236, 81, 1396],
  badgeText: [{
    value: `The area behind this waterfall is said to be a secret spot where Scirocco goes to meditate during periods of stress.
            Marks on the wall indicate a major brawl between Scirocco and Black Scorpion (most likely due to Black Scorpion making fun of Scirocco for meditating).`,
  }],
  notes: `Located in ${mapLink(NervaArchipelago)}, in the Primeva neighborhood.

It is in a cave behind the waterfall 240 yards east of the neighborhood marker.`,
  links: [
    { title: 'Soother Badge', href: 'https://homecoming.wiki/wiki/Soother_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png' }],
  vidiotMapKey: '8',
}
