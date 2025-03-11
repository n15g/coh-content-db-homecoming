import { BadgeData } from 'coh-content-db'

export const GoonSquad: BadgeData = {
  type: 'DEFEAT',
  key: 'goon-squad',
  setTitle: { id: 406 },
  name: [
    { value: 'Goon Squad' },
  ],
  alignment: ['V'],
  badgeText: [
    { value: 'Nobody better strike the Consortium while you\'re around.' },
  ],
  acquisition: 'Defeat 333 Cage Consortium Guards',
  links: [
    { title: 'Goon Squad Badge', href: 'https://homecoming.wiki/wiki/Goon_Squad_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/goon-squad.png' },
  ],
}
