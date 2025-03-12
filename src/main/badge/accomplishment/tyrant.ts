import { BadgeData } from 'coh-content-db'

export const Tyrant: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'tyrant',
  setTitle: { id: 2354 },
  name: [
    { value: 'Tyrant' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [{ value: `You ruthlessly took advantage of the Praetorian Loyalists in your pursuit of power, fame, and glory.` }],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/accomp_prae_loyal.png' }],
  acquisition: 'Complete every story arc in the Praetorian Power storyline to earn this badge.',
  links: [
    { title: 'Tyrant Badge', href: 'https://homecoming.wiki/wiki/Tyrant_Badge' },
  ],
}
