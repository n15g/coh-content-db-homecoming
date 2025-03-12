import { BadgeData } from 'coh-content-db'

export const Shapeshifter: BadgeData = {
  type: 'ACHIEVEMENT',
  key: 'shapeshifter',
  setTitle: { id: 2502 },
  name: [
    { value: 'Shapeshifter' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: `You've purchased ten costume powers using the Prismatic Aether you amassed from overcoming an enormous number of challenges.` },
  ],
  acquisition: `Use Prismatic Aether salvage to purchase a total of ten permanent costume powers from BenevoLabs vendors in any Vault Reserve location`,
  links: [
    { title: 'Shapeshifter Badge', href: 'https://homecoming.wiki/wiki/Shapeshifter_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/shapeshifter.png' },
  ],
}
