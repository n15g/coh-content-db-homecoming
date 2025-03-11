import { BadgeData } from 'coh-content-db'

export const LostSavior: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'lost-savior',
  setTitle: { id: 988 },
  name: [
    { value: 'Lost Savior' },
  ],
  alignment: ['H'],
  badgeText: [
    {
      value: 'With the help of the Midnight Squad, Dawn Patrol and even a Rikti scientist, you\'ve done the '
        + 'impossible. You\'ve found a cure for the Lost.',
    },
  ],
  acquisition: 'Complete the Cure Lost mission from Montague Castanella',
  links: [
    { title: 'Lost Savior Badge', href: 'https://homecoming.wiki/wiki/Lost_Savior_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/lost-savior.png' },
  ],
}
