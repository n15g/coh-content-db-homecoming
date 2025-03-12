import { BadgeData } from 'coh-content-db'

export const Believer: BadgeData = {
  type: 'DEFEAT',
  key: 'believer',
  setTitle: { id: 430 },
  name: [
    { value: 'Believer' },
  ],
  alignment: ['H'],
  badgeText: [
    { value: 'You have defeated the monster in the lake, proving to all that it is real.' },
  ],
  acquisition: 'Defeat Sally, a monster that spawns in Croatoa, twice',
  links: [
    { title: 'Believer Badge', href: 'https://homecoming.wiki/wiki/Believer_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/believer.png' },
  ],
}
