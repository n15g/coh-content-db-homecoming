import { BadgeData } from 'coh-content-db'

export const Mimic: BadgeData = {
  type: 'achievement',
  key: 'mimic',
  setTitleId: [2500],
  name: 'Mimic',
  morality: 'all',
  badgeText: `You've purchased a permanent costume power reward using the Prismatic Aether acquired from overcoming some challenges.`,
  acquisition: `Use Prismatic Aether salvage to purchase a permanent costume power from BenevoLabs vendors in any Vault Reserve location.`,
  links: [
    { title: 'Mimic Badge', href: 'https://homecoming.wiki/wiki/Mimic_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/mimic.png',
}
