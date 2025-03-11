import { BadgeData } from 'coh-content-db'

export const PenitentOfVice: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'penitent-of-vice',
  setTitle: { id: 334 },
  name: [
    { alignment: 'H', value: 'Penitent of Vice' },
    { alignment: 'V', value: 'Paragon of Vice' },
  ],
  alignment: ['V'],
  badgeText: [
    {
      alignment: 'H', value: 'Paragon City still remembers the black eye you gave it to impress Arachnos, and won\'t soon '
        + 'forget.',
    },
    { alignment: 'V', value: 'You showed Arachnos how tough you were in Paragon City.' },
  ],
  acquisition: 'Complete the Defeat all Arachnos Personnel mission from Willy Wheeler',
  links: [
    { title: 'Penitent of Vice Badge', href: 'https://homecoming.wiki/wiki/Penitent_of_Vice_Badge' },
    { title: 'Paragon of Vice Badge', href: 'https://homecoming.wiki/wiki/Paragon_of_Vice_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/stature-3.png' },
  ],
}
