import { BadgeData } from 'coh-content-db'

export const BailoutHero: BadgeData = {
  type: 'ACHIEVEMENT',
  key: 'bailout-hero',
  setTitle: { id: 2206 },
  name: [
    { alignment: 'H', value: 'Bailout Hero' },
    { alignment: 'V', value: 'Bailout Villain' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [{ value: `The Freedom Phalanx and Vindicators were absorbed by Mot in their efforts to free Praetor Duncan. You worked together with a team of super powered individuals and Dream Doctor to save them and Praetor Duncan, while also destroying Diabolique once and for all.` }],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/da-zone.png' }],
  acquisition: 'Awarded after completing the Dream Doctor mission to complete the Dilemma Diabolique trial.',
  links: [
    { title: 'Bailout Hero Badge', href: 'https://homecoming.wiki/wiki/Bailout_Hero_Badge' },
    { title: 'Bailout Villain Badge', href: 'https://homecoming.wiki/wiki/Bailout_Villain_Badge' },
  ],
}
