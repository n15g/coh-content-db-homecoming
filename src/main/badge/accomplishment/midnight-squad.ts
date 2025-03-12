import { BadgeData } from 'coh-content-db'

export const MidnightSquad: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'midnight-squad',
  setTitle: { id: 987 },
  name: [
    { value: 'Midnight Squad' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    {
      value: 'You have proven yourself a worthy ally to the secretive order of mystics, magicians and '
        + 'scholars known as the Midnight Squad. Because of this, they have granted you access to their '
        + 'exclusive Midnighter Club.',
    },
  ],
  acquisition: 'Complete the Lost and Found story arc from Montague Castanella, or visit the House Hunter exploration badge',
  links: [
    { title: 'Midnight Squad Badge', href: 'https://homecoming.wiki/wiki/Midnight_Squad_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/midnight-squad.png' },
  ],
}
