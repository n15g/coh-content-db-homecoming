import { BadgeData } from 'coh-content-db'

export const Protectorate: BadgeData = {
  type: 'defeat',
  key: 'protectorate',
  setTitleId: [43],
  name: [
    { alignment: 'hero', value: 'Protectorate' },
    { alignment: 'villain', value: 'Devourer of Earth' },
  ],
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: `You have shown that you can protect the world from the energy sapping emanators used by the Devouring Earth.`,
  acquisition: 'Defeat 100 Devouring Earth emanators.',
  links: [
    { title: 'Protectorate Badge', href: 'https://homecoming.wiki/wiki/Protectorate_Badge' },
    { title: 'Devourer of Earth Badge', href: 'https://homecoming.wiki/wiki/Devourer_of_Earth_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/devouring.png',
}
