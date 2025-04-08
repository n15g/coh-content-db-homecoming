import { BadgeData } from 'coh-content-db'

export const Doppelganger: BadgeData = {
  type: 'achievement',
  key: 'doppelganger',
  setTitleId: [2501],
  name: 'Doppelganger',
  morality: 'all',
  badgeText: `You've purchased five permanent costume powers using the Prismatic Aether you assembled from overcoming many challenges.`,
  acquisition: `Use Prismatic Aether salvage to purchase a total of five permanent costume powers from BenevoLabs vendors in any Vault Reserve location.`,
  links: [
    { title: 'Doppelganger Badge', href: 'https://homecoming.wiki/wiki/Doppelganger_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/doppelganger.png',
}
