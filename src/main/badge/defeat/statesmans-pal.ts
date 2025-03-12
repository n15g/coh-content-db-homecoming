import { BadgeData } from 'coh-content-db'

export const StatesmansPal: BadgeData = {
  type: 'DEFEAT',
  key: 'statesmans-pal',
  setTitle: { id: 58 },
  name: [
    { alignment: 'H', value: 'Statesman\'s Pal' },
    { alignment: 'V', value: 'Praetoria\'s Bane' },
  ],
  alignment: ['H'],
  badgeText: [
    { alignment: 'H', value: 'You have rescued Statesman from the clutches of Praetoria.' },
    {
      alignment: 'V', value: 'In the past you rescued Statesman from the Praetorians. Perhaps today you might not do the '
        + 'same.',
    },
  ],
  acquisition: 'Defeat Tyrant in the Free Statesman mission from Maria Jenkins\' A Hero\'s Hero arc',
  links: [
    { title: 'Statesman\'s Pal Badge', href: 'https://homecoming.wiki/wiki/Statesman%27s_Pal_Badge' },
    { title: 'Praetoria\'s Bane Badge', href: 'https://homecoming.wiki/wiki/Praetoria%27s_Bane_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/praetorians.png' },
  ],
}
