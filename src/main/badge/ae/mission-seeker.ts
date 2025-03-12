import { BadgeData } from 'coh-content-db'

export const MissionSeeker: BadgeData = {
  type: 'AE',
  key: 'mission-seeker',
  setTitle: { id: 1236 },
  name: [
    { value: 'Mission Seeker' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [{ value: 'You\'ve earned 25 Mission Architect badges!' }],
  acquisition: 'Earn 25 Mission Architect badges.',
  links: [
    { title: 'Mission Seeker Badge', href: 'https://homecoming.wiki/wiki/Mission_Seeker_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/ae/mission-seeker.png' }],
}
