import { BadgeData } from 'coh-content-db'

export const Inventor: BadgeData = {
  type: 'INVENTION',
  key: 'inventor',
  setTitle: { id: 732 },
  name: [{ value: 'Inventor' }],
  alignment: ['H', 'V', 'P'],
  badgeText: [{ value: 'You have proven your skills as an Inventor at the University.' }],
  acquisition: 'Awarded for completing the Invention System tutorial missions.',
  notes: 'For Heroes, this is awarded by completing the mission from Guidance Counselor Jones.'
    + '\n\nfor Villains, this is awarded by completing the mission from James Bright at the Cap au Diable university.',
  links: [
    { title: 'Inventor Badge', href: 'https://homecoming.wiki/wiki/Inventor_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/invention/inventor.png' }],
}
