import { BadgeData } from 'coh-content-db'

export const Medic: BadgeData = {
  type: 'achievement',
  key: 'medic',
  setTitleId: [2, 1687],
  name: [
    { alignment: 'hero', value: 'Medic' },
    { alignment: 'villain', value: 'Fixer' },
    { alignment: 'praetorian', value: 'Do-Gooder' },
  ],
  morality: 'all',
  badgeText: [
    { alignment: 'hero', value: 'You have helped your fellow heroes by healing them for two hundred and fifty thousand hit points.' },
    { alignment: 'villain', value: `You've kept the forces of villainy in the fight by healing two hundred and fifty thousand points of damage.` },
    { alignment: 'praetorian', value: `Healing has always seemed to you a good thing. It's easy to lose sight of what's good in Praetoria.` },
  ],
  acquisition: 'Heal others for 250,000 hit points.',
  links: [
    { title: 'Medic Badge', href: 'https://homecoming.wiki/wiki/Medic_Badge' },
    { title: 'Fixer Badge', href: 'https://homecoming.wiki/wiki/Fixer_Badge' },
    { title: 'Do Gooder Badge', href: 'https://homecoming.wiki/wiki/Do_Gooder_Badge' },
  ],
  icon: [
    { alignment: 'hero', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/heal-h.png' },
    { alignment: 'villain', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/heal-v.png' },
  ],
}
