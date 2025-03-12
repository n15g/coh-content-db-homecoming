import { BadgeData } from 'coh-content-db'

export const Protectorate: BadgeData = {
  type: 'DEFEAT',
  key: 'protectorate',
  setTitle: { id: 43 },
  name: [
    { alignment: 'H', value: 'Protectorate' },
    { alignment: 'V', value: 'Devourer of Earth' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    {
      value: 'You have shown that you can protect the world from the energy sapping emanators used by the '
        + 'Devouring Earth.',
    },
  ],
  acquisition: 'Defeat 100 Devouring Earth emanators',
  links: [
    { title: 'Protectorate Badge', href: 'https://homecoming.wiki/wiki/Protectorate_Badge' },
    { title: 'Devourer of Earth Badge', href: 'https://homecoming.wiki/wiki/Devourer_of_Earth_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/devouring.png' },
  ],
}
