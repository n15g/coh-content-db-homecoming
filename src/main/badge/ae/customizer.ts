import { BadgeData } from 'coh-content-db'

export const Customizer: BadgeData = {
  type: 'AE',
  key: 'customizer',
  setTitle: { id: 1202 },
  name: [
    { value: 'Customizer' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [{ value: 'You\'ve saved and loaded a mission with a custom Boss, earning you the Customizer badge.' }],
  acquisition: 'Create and publish mission using the Mission Architect and include a Custom Critter as a Boss. (Account-wide)',
  links: [
    { title: 'Customizer Badge', href: 'https://homecoming.wiki/wiki/Customizer_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/ae/customizer.png' }],
}
