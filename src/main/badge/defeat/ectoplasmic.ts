import { BadgeData } from 'coh-content-db'

export const Ectoplasmic: BadgeData = {
  type: 'DEFEAT',
  key: 'ectoplasmic',
  setTitle: { id: 208 },
  name: [
    { value: 'Ectoplasmic' },
  ],
  alignment: ['H'],
  badgeText: [
    {
      value: 'You have held back the forces of the afterlife in their eternal struggle to break through to '
        + 'the mortal world.',
    },
  ],
  acquisition: 'Defeat 50 Ghosts that spawn from the Ghost Ship',
  links: [
    { title: 'Ectoplasmic Badge', href: 'https://homecoming.wiki/wiki/Ectoplasmic_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/ectoplasmic.png' },
  ],
}
