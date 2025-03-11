import { BadgeData } from 'coh-content-db'

export const Magistrate: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'magistrate',
  setTitle: { id: 2345 },
  name: [
    { value: 'Magistrate' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [{ value: `You assisted the Praetorian Loyalists to enforce the law for the peace and safety of everyone in Praetoria.` }],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/accomp_prae_loyal.png' }],
  acquisition: 'Complete every story arc in the Praetorian Responsibility storyline to earn this badge.',
  links: [
    { title: 'Magistrate Badge', href: 'https://homecoming.wiki/wiki/Magistrate_Badge' },
  ],
}
