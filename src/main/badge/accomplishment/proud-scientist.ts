import { BadgeData } from 'coh-content-db'

export const ProudScientist: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'proud-scientist',
  setTitle: { id: 2273 },
  name: [
    { value: 'Proud Scientist' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: 'You played Anti-Matter\'s personal story and witnessed his last moments.' },
  ],
  acquisition: 'Complete the personal story from Anti-Matter',
  links: [
    { title: 'Proud Scientist Badge', href: 'https://homecoming.wiki/wiki/Proud_Scientist_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/proud-scientist.png' },
  ],
}
