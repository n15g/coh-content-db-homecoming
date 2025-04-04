import { BadgeData } from 'coh-content-db'
import { PocketD } from '../../zone/pocket-d'

export const Trucker: BadgeData = {
  type: 'exploration',
  key: 'trucker',
  setTitleId: [731],
  name: 'Trucker',
  morality: 'all',
  zoneKey: PocketD.key,
  loc: [200, -3, -1101],
  badgeText: [{ value: 'You\'ve visited the floating truck in Pocket D.' }],
  notes: 'On the floating truck outside of Pocket D.\n'
    + '\n'
    + 'From the Chalet island, a character will need to fly, teleport, or super jump to reach the truck.\n'
    + '\n'
    + 'Note that despite being only accessible during the Winter Event on live, Homecoming appears to have made the Ski Chalet permanently accessible, making this badge also always available.',
  links: [
    { title: 'Trucker Badge', href: 'https://homecoming.wiki/wiki/Trucker_Badge' },
  ],
  icon: [
    { alignment: 'hero', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' },
    { alignment: 'villain', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png' },
  ],
  vidiotMapKey: '1',
}
