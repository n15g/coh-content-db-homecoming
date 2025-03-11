import { BadgeData } from 'coh-content-db'

export const MasterAtArms: BadgeData = {
  type: 'DEFEAT',
  key: 'master-at-arms',
  setTitle: { id: 854 },
  name: [
    { value: 'Master at Arms' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: 'You have defeated the Rikti Master At Arms from the crashed ship in Rikti War Zone.' },
  ],
  acquisition: 'Defeat the Rikti Master at Arms U\'Kon Gr\'ai 10 times during Rikti Ship Raids',
  links: [
    { title: 'Master at Arms Badge', href: 'https://homecoming.wiki/wiki/Master_At_Arms_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/master-at-arms.png' },
  ],
}
