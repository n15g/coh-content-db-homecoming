import { BadgeData } from 'coh-content-db'
import { ReclusesVictory } from '../../map/recluses-victory'

export const Globetrotter: BadgeData = {
  type: 'EXPLORATION',
  key: 'globetrotter',
  setTitle: { id: 287 },
  name: [{ value: 'Globetrotter' }],
  alignment: ['H', 'V', 'P'],
  mapKey: ReclusesVictory.key,
  loc: [128, 16, -249],
  badgeText: [{ value: 'Lord Recluse targeted the statue of Atlas first, knowing it was an important symbol to Paragon\'s \'heroes.\'' }],
  notes: 'The Globetrotter Badge is located in the ${mapLink(ReclusesVictory)} zone in Sector 5.'
    + ' It is in front of the Atlas Statue, just behind the dais that Ms. Liberty stands on in the hero\'s version of Atlas Park.',
  links: [
    { title: 'Globetrotter Badge', href: 'https://homecoming.wiki/wiki/Globetrotter_Badge' },
  ],
  icon: [
    { alignment: 'H', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' },
    { alignment: 'V', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png' },
  ],
  vidiotMapKey: '1',
}
