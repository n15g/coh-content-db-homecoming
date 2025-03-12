import { BadgeData } from 'coh-content-db'

export const Toothbreaker: BadgeData = {
  type: 'EVENT',
  key: 'toothbreaker',
  setTitle: { id: 528 },
  name: [
    { value: 'Toothbreaker' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: 'You have defeated Snaptooth 5 times, and are truly a Toothbreaker.' },
  ],
  acquisition: 'Defeat Snaptooth 5 times.',
  notes: 'Snaptooth can be found in the following missions:'
    + '\n\n1. **Find Snaptooth and take him out** from DJ Zero during the Valentine\'s Day Event'
    + '\n2. **Rescue Baby New Year from Snaptooth!** from Father Time during the Winter Events.',
  links: [
    { title: 'Toothbreaker Badge', href: 'https://homecoming.wiki/wiki/Toothbreaker_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/event/toothbreaker.png' }],
}
