import { BadgeData } from 'coh-content-db'

export const LandSeaAir: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'land-sea-air',
  setTitle: { id: 1981 },
  name: [
    { value: 'Land, Sea & Air' },
  ],
  alignment: ['H'],
  badgeText: [
    {
      value: 'You shut down the alliance between the Sky Raiders and the Praetorian Imperial Defense Force, '
        + 'halting an assault on Skyway City in the process.',
    },
  ],
  acquisition: 'Complete the Admiral Sutter Task Force',
  links: [
    { title: 'Land, Sea & Air Badge', href: 'https://homecoming.wiki/wiki/Land%2C_Sea_%26_Air_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/land-sea-air.png' },
  ],
}
