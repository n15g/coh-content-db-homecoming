import { BadgeData } from 'coh-content-db'

export const ChippedTalon: BadgeData = {
  type: 'DEFEAT',
  key: 'chipped-talon',
  setTitle: { id: 2061 },
  name: [
    { value: 'Chipped Talon' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    {
      value: 'Sorceress Serene herself has spread word that you are to be slain on sight, as vengeance for '
        + 'your attacks on her coven. Always vengeance with this lot... You defeated several Talons of '
        + 'Vengeance to earn this badge.',
    },
  ],
  acquisition: 'Defeat 100 points worth of Talons of Vengeance',
  links: [
    { title: 'Chipped Talon Badge', href: 'https://homecoming.wiki/wiki/Chipped_Talon_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/chipped-talon.png' },
  ],
}
