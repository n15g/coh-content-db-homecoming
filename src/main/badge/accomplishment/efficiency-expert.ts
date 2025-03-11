import { BadgeData } from 'coh-content-db'

export const EfficiencyExpert: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'efficiency-expert',
  setTitle: { id: 346 },
  name: [
    { value: 'Efficiency Expert' },
  ],
  alignment: ['V'],
  badgeText: [
    { value: 'You have proven yourself efficient by succeeding at all of Mr. Pither\'s timed tasks.' },
  ],
  acquisition: 'Complete all of Efficiency Expert Pither\'s timed missions successfully',
  links: [
    { title: 'Efficiency Expert Badge', href: 'https://homecoming.wiki/wiki/Efficiency_Expert_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/stature-9.png' },
  ],
}
