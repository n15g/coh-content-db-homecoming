import { BadgeData } from 'coh-content-db'
import { BloodyBay } from '../../map/bloody-bay'

export const Lobbyist: BadgeData = {
  type: 'EXPLORATION',
  key: 'lobbyist',
  setTitle: { id: 255 },
  name: [
    { alignment: 'H', value: 'Lobbyist' },
    { alignment: 'V', value: 'Crooked Politician' },
  ],
  alignment: ['H', 'V', 'P'],
  mapKey: BloodyBay.key,
  loc: [2265, 137, -832],
  badgeText: [{ value: 'Spanky Rabinowitz\' cousin Charlie \'Big Buck\' Rabinowitz owned Big Bucks Casino. It is said much of Spanky\'s campaign money came from the take here.' }],
  notes: 'The Crooked Politician Badge is located in Bloody Bay on top of the casino building 120 yards due east of Meteor Do.',
  links: [
    { title: 'Lobbyist Badge', href: 'https://homecoming.wiki/wiki/Lobbyist_Badge' },
    { title: 'Crooked Politician Badge', href: 'https://homecoming.wiki/wiki/Crooked_Politician_Badge' },
  ],
  icon: [
    { alignment: 'H', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' },
    { alignment: 'V', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png' },
  ],
  vidiotMapKey: '1',
}
