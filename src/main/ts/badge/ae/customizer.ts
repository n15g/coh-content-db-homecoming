import { BadgeData } from 'coh-content-db'

export const Customizer: BadgeData = {
  type: 'architect-entertainment',
  key: 'customizer',
  setTitleId: [1202],
  name: 'Customizer',
  morality: 'all',
  badgeText: `You've saved and loaded a mission with a custom Boss, earning you the Customizer badge.`,
  acquisition: 'Create and publish mission using the Mission Architect and include a Custom Critter as a Boss.',
  notes: 'This badge is awarded to all characters on your account.',
  links: [
    { title: 'Customizer Badge', href: 'https://homecoming.wiki/wiki/Customizer_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/ae/customizer.png',
}
