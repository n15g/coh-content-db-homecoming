import { BadgeData, mapLink } from 'coh-content-db'
import { SirensCall } from '../../map/sirens-call'

export const Politician: BadgeData = {
  type: 'EXPLORATION',
  key: 'politician',
  setTitle: { id: 260 },
  name: [{ value: 'Politician' }],
  alignment: ['H', 'V', 'P'],
  mapKey: SirensCall.key,
  loc: [664, 0, 960.5],
  badgeText: [{ value: 'Council man John Chard announced from this location that his island would be the front lines of defense against the Rikti invasion.' }],
  notes: `The Politician Badge is located in the ${mapLink(SirensCall)} zone to the right (north) of the doorway of the building immediately east of the hero base.`,
  links: [{ title: 'Politician Badge', href: 'https://homecoming.wiki/wiki/Politician_Badge' }],
  icon: [
    { alignment: 'H', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' },
    { alignment: 'V', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png' },
  ],
  vidiotMapKey: '2',
}
