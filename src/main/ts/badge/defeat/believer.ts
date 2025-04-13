import { BadgeData } from 'coh-content-db'

export const Believer: BadgeData = {
  type: 'defeat',
  key: 'believer',
  setTitleId: [430],
  name: 'Believer',
  morality: 'heroic',
  badgeText: 'You have defeated the monster in the lake, proving to all that it is real.',
  acquisition: 'Defeat Sally, a monster that spawns in Croatoa, twice.',
  links: [
    { title: 'Believer Badge', href: 'https://homecoming.wiki/wiki/Believer_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/believer.png',
}
