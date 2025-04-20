import { BadgeData } from 'coh-content-db'

export const Rocketman: BadgeData = {
  type: 'pvp',
  key: 'rocketman',
  setTitleId: [371],
  name: [
    { sex: 'M', value: 'Rocketman' },
    { sex: 'F', value: 'Rocketwoman' },
  ],
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: `Supergroups everywhere quake in fear when you enter Warburg. You've launched the Warburg Rocket ten times.`,
  acquisition: 'Launch the Warburg rocket ten times.',
  links: [
    { title: 'Rocketman Badge', href: 'https://homecoming.wiki/wiki/Rocketman_Badge' },
    { title: 'Rocketwoman Badge', href: 'https://homecoming.wiki/wiki/Rocketwoman_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/pvp/rocketman.png',
}
