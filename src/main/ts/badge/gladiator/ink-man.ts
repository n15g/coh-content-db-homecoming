import { BadgeData } from 'coh-content-db'

export const InkMan: BadgeData = {
  type: 'gladiator',
  key: 'ink-man',
  setTitleId: [469],
  name: 'Ink Man',
  morality: 'all',
  badgeText: 'You have allowed these Tsoo to fight for you.',
  acquisition: 'Defeat 100 Blue Ink Men (Tsoo) other than level 30-40 Dragon Blue Ink Men.',
  notes: 'Level 30-40 Eagle, Serpent, and Tiger Blue Ink Men count, and all level 50-54 Blue Ink Men count.'
    + ' Level 30-40 Dragon Blue Ink Men don\'t count, due to a likely oversight in badges.bin.',
  links: [
    { title: 'Ink Man Badge', href: 'https://homecoming.wiki/wiki/Ink_Man_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png',
}
