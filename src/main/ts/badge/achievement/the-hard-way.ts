import { BadgeData } from 'coh-content-db'

export const TheHardWay: BadgeData = {
  type: 'achievement',
  key: 'the-hard-way',
  setTitleId: [2224],
  name: 'The Hard Way',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: `You've never been one to do things the easy way, have you?
You've proven true mastery over your Incarnate powers and the Well of the Furies by defeating Tyrant while he maintained most of his link to the well.
You've taken The Hard Way - and prevailed!`,
  acquisition: 'Defeat Tyrant during the final battle of the Magisterium Trial without destroying more than 12 Lights of the Well.',
  links: [
    { title: 'The Hard Way Badge', href: 'https://homecoming.wiki/wiki/The_Hard_Way_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/magisterium-3.png',
}
