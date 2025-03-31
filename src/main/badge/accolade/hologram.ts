import { BadgeData } from 'coh-content-db'

export const Hologram: BadgeData = {
  type: 'ACCOLADE',
  key: 'hologram',
  setTitle: { id: 2497 },
  name: [
    { value: 'Hologram' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    {
      value: `Thank you for your purchase of the BenevoLabs© BL-22c Holographic Matrix™!
This intuitive, all-in-one system will automatically install and manage any hologram costumes you own, allowing you to access all of them from one handy location! We look forward to your continued patronage!`,
    },
  ],
  acquisition: `Purchase from BenevoLabs vendors for 50 Prismatic Aether salvage.`,
  notes: `BenevoLabs vendors can be found at any Vault Reserve location.`,
  links: [
    { title: 'Hologram Badge', href: 'https://homecoming.wiki/wiki/Hologram_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/hologram.png' },
  ],
}
