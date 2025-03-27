import { BadgeData, badgeLink } from 'coh-content-db'
import { Archmage } from '../accolade/archmage'

export const ArchMageOfAgony: BadgeData = {
  type: 'GLADIATOR',
  key: 'arch-mage-of-agony',
  setTitle: { id: 509 },
  name: [
    { value: 'Arch-Mage of Agony' },
  ],
  alignment: ['H'],
  badgeText: [
    { value: 'You can command the spirits of another age!' },
  ],
  acquisition: `Earn the ${badgeLink(Archmage)} Badge (Circle of Thorns)`,
  links: [
    { title: 'Arch-Mage of Agony Badge', href: 'https://homecoming.wiki/wiki/Arch-Mage_of_Agony_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png' },
  ],
}
