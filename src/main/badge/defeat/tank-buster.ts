import { BadgeData } from 'coh-content-db'

export const TankBuster: BadgeData = {
  type: 'DEFEAT',
  key: 'tank-buster',
  setTitle: { id: 46 },
  name: [
    { value: 'Tank Buster' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: 'You have proved your worth on the streets, and the Freakshow have learned to fear your name.' },
  ],
  acquisition: 'Defeat 100 Freakshow tanks',
  notes: 'This is one of the badges needed to unlock Viridian as a contact for villains level 45-50.',
  links: [
    { title: 'Tank Buster Badge', href: 'https://homecoming.wiki/wiki/Tank_Buster_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/tank-buster.png' },
  ],
}
