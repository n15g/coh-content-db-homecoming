import { BadgeData } from 'coh-content-db'

export const TheThiefOfMidnight: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'the-thief-of-midnight',
  setTitle: { id: 986 },
  name: [
    { value: 'The Thief of Midnight' },
  ],
  alignment: ['V'],
  badgeText: [
    {
      value: 'Only you and Darrin Wade will ever know what you took from the Midnight Squad. Even now they '
        + 'believe the artifacts they look upon with such reverence to be authentic.',
    },
  ],
  acquisition: 'Complete the Midnight Draws Near story arc from Darrin Wade',
  links: [
    { title: 'The Thief of Midnight Badge', href: 'https://homecoming.wiki/wiki/The_Thief_of_Midnight_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/the-thief-of-midnight.png' },
  ],
}
