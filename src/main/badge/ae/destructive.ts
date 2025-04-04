import { BadgeData } from 'coh-content-db'

export const Destructive: BadgeData = {
  type: 'architect-entertainment',
  key: 'destructive',
  setTitleId: [1250],
  name: 'Destructive',
  morality: 'all',
  badgeText: `You've destroyed your first object during an Architect mission, earning yourself the Destructive badge.`,
  acquisition: 'Destroy a destructible object inside a published Mission Architect mission.',
  links: [
    { title: 'Destructive Badge', href: 'https://homecoming.wiki/wiki/Destructive_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/ae/destructive.png',
}
