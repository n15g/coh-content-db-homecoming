import { BadgeData } from 'coh-content-db'

export const LongbowReservist: BadgeData = {
  type: 'event',
  key: 'longbow-reservist',
  setTitleId: [520],
  name: [
    { alignment: 'hero', value: 'Longbow Reservist' },
    { alignment: 'villain', value: 'Jet-Setter' },
  ],
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: [
    { alignment: 'hero', value: 'You have been made an honorary Longbow Eagle, temporarily issued a Longbow jetpack.' },
    { alignment: 'villain', value: 'You have received a Jetpack from an anonymous benefactor.' },
  ],
  acquisition: 'Purchase from the Candy Keeper for 25 Candy Canes and 30,000 inf.',
  links: [
    { title: 'Longbow Reservist Badge', href: 'https://homecoming.wiki/wiki/Longbow_Reservist_Badge' },
    { title: 'Jet-Setter Badge', href: 'https://homecoming.wiki/wiki/Jet-Setter_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/event/longbow-reservist.png',
}
