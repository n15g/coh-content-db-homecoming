import { BadgeData } from 'coh-content-db'

export const FrozenFury: BadgeData = {
  type: 'EVENT',
  key: 'frozen-fury',
  setTitle: { id: 210 },
  name: [
    { value: 'Frozen Fury' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: 'You helped defeat a manifestation of the Winter Lord, who brought his cold wrath to Paragon City.' },
  ],
  acquisition: 'Defeat a Winter Lord during the Winter Event.',
  links: [
    { title: 'Frozen Fury Badge', href: 'https://homecoming.wiki/wiki/Frozen_Fury_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/event/frozen-fury.png' }],
}
