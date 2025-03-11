import { BadgeData } from 'coh-content-db'

export const Scoundrel: BadgeData = {
  type: 'ACHIEVEMENT',
  key: 'scoundrel',
  setTitle: { id: 1452 },
  name: [
    { value: 'Scoundrel' },
  ],
  alignment: ['V'],
  badgeText: [
    {
      value: 'You take consideration of all the angles and know when making deals instead of wreaking blind '
        + 'havoc puts you farther ahead. You have completed a Rogue Morality Mission earning yourself '
        + 'this badge.',
    },
  ],
  acquisition: 'Complete a Rogue Morality mission',
  links: [
    { title: 'Scoundrel Badge', href: 'https://homecoming.wiki/wiki/Scoundrel_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/rogue-align.png' },
  ],
}
