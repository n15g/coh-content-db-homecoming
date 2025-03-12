import { BadgeData } from 'coh-content-db'

export const Survivor: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'survivor',
  setTitle: { id: 2348 },
  name: [
    { value: 'Survivor' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [{ value: `You helped the Praetorian Resistance to reach their goals with as little loss of life as possible.` }],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/accomp_prae_resist.png' }],
  acquisition: 'Complete every story arc in the Praetorian Warden storyline to earn this badge.',
  links: [
    { title: 'Survivor Badge', href: 'https://homecoming.wiki/wiki/Survivor_Badge' },
  ],
}
