import { BadgeData } from 'coh-content-db'

export const Inquisitor: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'inquisitor',
  setTitle: { id: 1445 },
  name: 'Inquisitor',
  alignment: ['V'],
  badgeText: 'You completed a Villain Alignment Mission earning yourself the Inquisitor badge.',
  acquisition: 'Complete a villain alignment mission.',
  links: [
    { title: 'Inquisitor Badge', href: 'https://homecoming.wiki/wiki/Inquisitor_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/inquisitor.png',
}
