import { BadgeData } from 'coh-content-db'

export const TimeTraveler: BadgeData = {
  type: 'achievement',
  key: 'time-traveler',
  setTitleId: [400],
  name: 'Time Traveler',
  morality: 'all',
  badgeText: `It seems you have mastered the recursive time flux of Lord Recluse's victory. You've spent one hour here, though it seems like much longer.`,
  acquisition: `Spend 1 hour in Recluse's Victory.`,
  links: [
    { title: 'Time Traveler Badge', href: 'https://homecoming.wiki/wiki/Time_Traveler_Badge' },
  ],
  icon: [
    { alignment: 'hero', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/time-h.png' },
    { alignment: 'villain', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/time-v.png' },
  ],
}
