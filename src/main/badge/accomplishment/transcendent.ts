import { BadgeData } from 'coh-content-db'

export const Transcendent: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'transcendent',
  setTitle: { id: 70 },
  name: [
    { value: 'Transcendent' },
  ],
  alignment: ['H'],
  badgeText: [
    { value: 'You have become the master of the mystical gateway beneath the Hollows.' },
  ],
  acquisition: 'Complete the The Cavern of Transcendence Trial',
  links: [
    { title: 'Transcendent Badge', href: 'https://homecoming.wiki/wiki/Transcendent_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/trial-1.png' },
  ],
}
