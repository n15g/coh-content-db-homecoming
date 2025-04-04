import { BadgeData } from 'coh-content-db'

export const Scoundrel: BadgeData = {
  type: 'achievement',
  key: 'scoundrel',
  setTitleId: [1452],
  name: 'Scoundrel',
  morality: 'villainous',
  badgeText: 'You take consideration of all the angles and know when making deals instead of wreaking blind havoc puts you farther ahead. You have completed a Rogue Morality Mission earning yourself this badge.',
  acquisition: 'Complete a Rogue morality mission.',
  links: [
    { title: 'Scoundrel Badge', href: 'https://homecoming.wiki/wiki/Scoundrel_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/rogue-align.png',
}
