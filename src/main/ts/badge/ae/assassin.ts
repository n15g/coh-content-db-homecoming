import { BadgeData } from 'coh-content-db'

export const Assassin: BadgeData = {
  type: 'architect-entertainment',
  key: 'assassin',
  setTitleId: [1319],
  name: 'Assassin',
  morality: 'all',
  badgeText: `You've defeated your first custom enemy during a published Architect mission earning yourself the Assassin badge.`,
  acquisition: 'Defeat one custom enemy inside a published Mission Architect arc.',
  links: [
    { title: 'Assassin Badge', href: 'https://homecoming.wiki/wiki/Assassin_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/ae/assassin.png',
}
