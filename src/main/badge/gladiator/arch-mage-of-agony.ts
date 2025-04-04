import { BadgeData } from 'coh-content-db'
import { Archmage } from '../accolade/archmage'

export const ArchMageOfAgony: BadgeData = {
  type: 'gladiator',
  key: 'arch-mage-of-agony',
  setTitleId: [509],
  name: [
    { value: 'Arch-Mage of Agony' },
  ],
  morality: 'heroic',
  badgeText: [
    { value: 'You can command the spirits of another age!' },
  ],
  links: [
    { title: 'Arch-Mage of Agony Badge', href: 'https://homecoming.wiki/wiki/Arch-Mage_of_Agony_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png' },
  ],
  requirements: [
    { key: Archmage.key, type: 'badge', badgeKey: Archmage.key },
  ],
}
