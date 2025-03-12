import { BadgeData } from 'coh-content-db'

export const Mimic: BadgeData = {
  type: 'ACHIEVEMENT',
  key: 'mimic',
  setTitle: { id: 2500 },
  name: [
    { value: 'Mimic' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: `You've purchased a permanent costume power reward using the Prismatic Aether acquired from overcoming some challenges.` },
  ],
  acquisition: `Use Prismatic Aether salvage to purchase a permanent costume power from BenevoLabs vendors in any Vault Reserve location`,
  links: [
    { title: 'Mimic Badge', href: 'https://homecoming.wiki/wiki/Mimic_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/mimic.png' },
  ],
}
