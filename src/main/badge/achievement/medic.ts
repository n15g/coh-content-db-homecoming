import { BadgeData } from 'coh-content-db'

export const Medic: BadgeData = {
  type: 'ACHIEVEMENT',
  key: 'medic',
  setTitle: { id: 2, praetorianId: 1687 },
  name: [
    { alignment: 'H', value: 'Medic' },
    { alignment: 'V', value: 'Fixer' },
    { alignment: 'P', value: 'Do-Gooder' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    {
      alignment: 'H', value: 'You have helped your fellow heroes by healing them for two hundred and fifty thousand hit '
        + 'points.',
    },
    {
      alignment: 'V', value: 'You\'ve kept the forces of villainy in the fight by healing two hundred and fifty thousand '
        + 'points of damage.',
    },
    {
      alignment: 'P', value: 'Healing has always seemed to you a good thing. It\'s easy to lose sight of what\'s good in '
        + 'Praetoria.',
    },
  ],
  acquisition: 'Heal others for 250,000 hit points',
  links: [
    { title: 'Medic Badge', href: 'https://homecoming.wiki/wiki/Medic_Badge' },
    { title: 'Fixer Badge', href: 'https://homecoming.wiki/wiki/Fixer_Badge' },
    { title: 'Do Gooder Badge', href: 'https://homecoming.wiki/wiki/Do_Gooder_Badge' },
  ],
  icon: [
    { alignment: 'H', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/heal-h.png' },
    { alignment: 'V', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/heal-v.png' },
  ],
}
