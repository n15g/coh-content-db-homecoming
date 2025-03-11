import { BadgeData } from 'coh-content-db'

export const Descended: BadgeData = {
  type: 'ACHIEVEMENT',
  key: 'descended',
  setTitle: { id: 1463 },
  name: [
    { value: 'Descended' },
  ],
  alignment: ['H'],
  badgeText: [
    {
      value: 'You have shrugged off the heavy binds of morality and selflessness and have become a Villain. '
        + 'You have shifted your alignment from Hero to Villain earning yourself the Descended badge.',
    },
  ],
  acquisition: 'Shift alignment from Hero to Villain',
  links: [
    { title: 'Descended Badge', href: 'https://homecoming.wiki/wiki/Descended_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/descended.png' },
  ],
}
