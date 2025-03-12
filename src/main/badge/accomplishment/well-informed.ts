import { BadgeData } from 'coh-content-db'

export const WellInformed: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'well-informed',
  setTitle: { id: 1444 },
  name: [
    { value: 'Well Informed' },
  ],
  alignment: ['V'],
  badgeText: [
    { value: 'You completed a Rogue Alignment Mission earning yourself the Well Informed badge.' },
  ],
  acquisition: 'Complete a Rogue Alignment mission',
  links: [
    { title: 'Well Informed Badge', href: 'https://homecoming.wiki/wiki/Well_Informed_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/well-informed.png' },
  ],
}
