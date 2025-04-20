import { BadgeData } from 'coh-content-db'

export const TrollTaskForceMember: BadgeData = {
  type: 'achievement',
  key: 'troll-task-force-member',
  setTitleId: [205],
  name: 'Troll Task Force Member',
  releaseDate: '2012-11-30',
  morality: 'heroic',
  badgeText: `You have logged enough time in the Hollows to be named an honorary member of Lt. Wincott's Trolls Task Force.`,
  acquisition: 'Spend 1 hour in The Hollows.',
  links: [
    { title: 'Troll Task Force Member Badge', href: 'https://homecoming.wiki/wiki/Troll_Task_Force_Member_Badge' },
  ],
  icon: [
    { alignment: 'hero', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/time-h.png' },
    { alignment: 'villain', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/time-v.png' },
  ],
}
