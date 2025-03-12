import { BadgeData } from 'coh-content-db'

export const DeathDenied: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'death-denied',
  setTitle: { id: 2163 },
  name: [
    { value: 'Death Denied' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: 'You have completed the Incarnate Trial: Dilemma Diabolique.' },
  ],
  acquisition: 'Complete the Dilemma Diabolique Trial',
  links: [
    { title: 'Death Denied Badge', href: 'https://homecoming.wiki/wiki/Death_Denied_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/death-denied.png' },
  ],
}
