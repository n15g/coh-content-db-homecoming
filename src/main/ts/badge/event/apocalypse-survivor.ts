import { BadgeData } from 'coh-content-db'

export const ApocalypseSurvivor: BadgeData = {
  type: 'event',
  key: 'apocalypse-survivor',
  setTitleId: [1023],
  name: 'Apocalypse Survivor',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: `You've helped take down a Zombie Elite, showing you are an Apocalypse Survivor!`,
  acquisition: 'Defeat a Zombie Elite Boss during a Zombie Apocalypse.',
  links: [
    { title: 'Apocalypse Survivor Badge', href: 'https://homecoming.wiki/wiki/Apocalypse_Survivor_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/event/apocalypse-survivor.png',
}
