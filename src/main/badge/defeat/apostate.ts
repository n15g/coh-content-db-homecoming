import { BadgeData } from 'coh-content-db'

export const Apostate: BadgeData = {
  type: 'DEFEAT',
  key: 'apostate',
  setTitle: { id: 2170 },
  name: [
    { value: 'Apostate' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: 'You have defied an entire pantheon by smashing the implements of their vile will.' },
  ],
  acquisition: 'Defeat 100 points worth of Incarnate-level Banished Pantheon',
  links: [
    { title: 'Apostate Badge', href: 'https://homecoming.wiki/wiki/Apostate_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/apostate.png' },
  ],
}
