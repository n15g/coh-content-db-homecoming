import { BadgeData } from 'coh-content-db'

export const MysticalSavior: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'mystical-savior',
  setTitle: { id: 77 },
  name: [
    { alignment: 'H', value: 'Mystical Savior' },
    { alignment: 'V', value: 'Mystical Adept' },
  ],
  alignment: ['H'],
  badgeText: [
    { value: 'You saved a cabal of mystics from being used by the Banished Pantheon.' },
  ],
  acquisition: 'Complete the Track down the Pantheon and rescue the mystics mission from Laura Brunetti or Miriam Bloechl',
  links: [
    { title: 'Mystical Savior Badge', href: 'https://homecoming.wiki/wiki/Mystical_Savior_Badge' },
    { title: 'Mystical Adept Badge', href: 'https://homecoming.wiki/wiki/Mystical_Adept_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/mystical-savior.png' },
  ],
}
