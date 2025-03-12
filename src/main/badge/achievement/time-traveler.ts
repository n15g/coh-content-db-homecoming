import { BadgeData } from 'coh-content-db'

export const TimeTraveler: BadgeData = {
  type: 'ACHIEVEMENT',
  key: 'time-traveler',
  setTitle: { id: 400 },
  name: [
    { value: 'Time Traveler' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    {
      value: 'It seems you have mastered the recursive time flux of Lord Recluse\'s victory. You\'ve spent one '
        + 'hour here, though it seems like much longer.',
    },
  ],
  acquisition: 'Spend 1 hour in Recluse\'s Victory',
  links: [
    { title: 'Time Traveler Badge', href: 'https://homecoming.wiki/wiki/Time_Traveler_Badge' },
  ],
  icon: [
    { alignment: 'H', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/time-h.png' },
    { alignment: 'V', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/time-v.png' },
  ],
}
