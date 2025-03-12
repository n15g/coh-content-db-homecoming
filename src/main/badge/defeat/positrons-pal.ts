import { BadgeData } from 'coh-content-db'

export const PositronsPal: BadgeData = {
  type: 'DEFEAT',
  key: 'positrons-pal',
  setTitle: { id: 2240 },
  name: [
    { alignment: 'H', value: 'Positron\'s Pal' },
    { alignment: 'V', value: 'Positron\'s Nemesis' },
  ],
  alignment: ['H'],
  badgeText: [
    { alignment: 'H', value: 'You have rescued Positron from the clutches of Praetoria.' },
    { alignment: 'V', value: 'In the past you rescued Positron from the Praetorians. Perhaps today you might not do the same.' },
  ],
  acquisition: 'Complete the A Hero\'s Epic story arc from Maria Jenkins',
  links: [
    { title: 'Positron\'s Pal Badge', href: 'https://homecoming.wiki/wiki/Positron%27s_Pal_Badge' },
    { title: 'Positron\'s Nemesis Badge', href: 'https://homecoming.wiki/wiki/Positron%27s_Nemesis_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/praetorians.png' },
  ],
}
