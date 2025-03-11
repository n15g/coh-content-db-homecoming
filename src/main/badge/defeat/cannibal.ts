import { BadgeData } from 'coh-content-db'

export const Cannibal: BadgeData = {
  type: 'DEFEAT',
  key: 'cannibal',
  setTitle: { id: 1472 },
  name: [
    { value: 'Cannibal' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    {
      value: 'The Ghouls only understand one thing. Strength. You\'ve proven that you have that in spades. '
        + 'You defeated hordes of Ghouls to earn this badge.',
    },
  ],
  acquisition: 'Defeat 100 points worth of Ghouls',
  links: [
    { title: 'Cannibal Badge', href: 'https://homecoming.wiki/wiki/Cannibal_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/cannibal.png' },
  ],
}
