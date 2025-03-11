import { BadgeData } from 'coh-content-db'

export const Fearsome: BadgeData = {
  type: 'ACHIEVEMENT',
  key: 'fearsome',
  setTitle: { id: 1455 },
  name: [
    { value: 'Fearsome' },
  ],
  alignment: ['H'],
  badgeText: [
    {
      value: 'You completed a Vigilante Morality Mission and then maintained your Vigilante alignment for 7 '
        + 'days earning yourself this badge.',
    },
  ],
  acquisition: 'Maintain a Vigilante alignment for 7 days',
  links: [
    { title: 'Fearsome Badge', href: 'https://homecoming.wiki/wiki/Fearsome_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/fearsome.png' },
  ],
}
