import { BadgeData } from 'coh-content-db'

export const LongbowReservist: BadgeData = {
  type: 'EVENT',
  key: 'longbow-reservist',
  setTitle: { id: 520 },
  name: [
    { alignment: 'H', value: 'Longbow Reservist' },
    { alignment: 'V', value: 'Jet-Setter' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { alignment: 'H', value: 'You have been made an honorary Longbow Eagle, temporarily issued a Longbow jetpack.' },
    { alignment: 'V', value: 'You have received a Jetpack from an anonymous benefactor.' },
  ],
  acquisition: 'Purchase from the Candy Keeper for 25 Candy Canes and 30,000 inf.',
  links: [
    { title: 'Longbow Reservist Badge', href: 'https://homecoming.wiki/wiki/Longbow_Reservist_Badge' },
    { title: 'Jet-Setter Badge', href: 'https://homecoming.wiki/wiki/Jet-Setter_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/event/longbow-reservist.png' }],
}
