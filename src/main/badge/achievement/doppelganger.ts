import { BadgeData } from 'coh-content-db'

export const Doppelganger: BadgeData = {
  type: 'ACHIEVEMENT',
  key: 'doppelganger',
  setTitle: { id: 2501 },
  name: [
    { value: 'Doppelganger' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: `You've purchased five permanent costume powers using the Prismatic Aether you assembled from overcoming many challenges.` },
  ],
  acquisition: `Use Prismatic Aether salvage to purchase a total of five permanent costume powers from BenevoLabs vendors in any Vault Reserve location`,
  links: [
    { title: 'Doppelganger Badge', href: 'https://homecoming.wiki/wiki/Doppelganger_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/doppelganger.png' },
  ],
}
