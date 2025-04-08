import { BadgeData } from 'coh-content-db'

export const Weatherman: BadgeData = {
  type: 'defeat',
  key: 'weatherman',
  setTitleId: [48],
  name: [
    { sex: 'M', value: 'Weatherman' },
    { sex: 'F', value: 'Weathergirl' },
  ],
  morality: 'all',
  badgeText: `You have calmed the storm by ridding the streets of the Outcasts' leaders.`,
  acquisition: 'Defeat 100 Outcasts bosses.',
  links: [
    { title: 'Weatherman Badge', href: 'https://homecoming.wiki/wiki/Weatherman_Badge' },
    { title: 'Weathergirl Badge', href: 'https://homecoming.wiki/wiki/Weathergirl_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/weatherman.png',
}
