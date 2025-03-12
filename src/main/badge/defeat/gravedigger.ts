import { BadgeData } from 'coh-content-db'

export const Gravedigger: BadgeData = {
  type: 'DEFEAT',
  key: 'gravedigger',
  setTitle: { id: 33 },
  name: [
    { value: 'Gravedigger' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: 'You have learned to put the Embalmed Cadavers in their place-- 6 feet under the ground.' },
  ],
  acquisition: 'Defeat 100 Vahzilok embalmed corpses',
  links: [
    { title: 'Gravedigger Badge', href: 'https://homecoming.wiki/wiki/Gravedigger_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/gravedigger.png' },
  ],
}
