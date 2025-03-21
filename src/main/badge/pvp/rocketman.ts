import { BadgeData } from 'coh-content-db'

export const Rocketman: BadgeData = {
  type: 'PVP',
  key: 'rocketman',
  setTitle: { id: 371 },
  name: [
    { sex: 'M', value: 'Rocketman' },
    { sex: 'F', value: 'Rocketwoman' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    {
      value: 'Supergroups everywhere quake in fear when you enter Warburg. You\'ve launched the Warburg '
        + 'Rocket ten times.',
    },
  ],
  acquisition: 'Launch the Warburg rocket ten times',
  links: [
    { title: 'Rocketman Badge', href: 'https://homecoming.wiki/wiki/Rocketman_Badge' },
    { title: 'Rocketwoman Badge', href: 'https://homecoming.wiki/wiki/Rocketwoman_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/pvp/rocketman.png' },
  ],
}
