import { BadgeData } from 'coh-content-db'

export const Inquisitor: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'inquisitor',
  setTitle: { id: 1445 },
  name: [
    { value: 'Inquisitor' },
  ],
  alignment: ['V'],
  badgeText: [
    { value: 'You completed a Villain Alignment Mission earning yourself the Inquisitor badge.' },
  ],
  acquisition: 'Complete a Villain Alignment mission',
  links: [
    { title: 'Inquisitor Badge', href: 'https://homecoming.wiki/wiki/Inquisitor_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/inquisitor.png' },
  ],
}
