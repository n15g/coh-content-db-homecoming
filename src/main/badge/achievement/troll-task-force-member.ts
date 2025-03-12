import { BadgeData } from 'coh-content-db'

export const TrollTaskForceMember: BadgeData = {
  type: 'ACHIEVEMENT',
  key: 'troll-task-force-member',
  setTitle: { id: 205 },
  name: [
    { value: 'Troll Task Force Member' },
  ],
  alignment: ['H'],
  badgeText: [
    {
      value: 'You have logged enough time in the Hollows to be named an honorary member of Lt. Wincott\'s '
        + 'Trolls Task Force.',
    },
  ],
  acquisition: 'Spend 1 hour in The Hollows',
  links: [
    { title: 'Troll Task Force Member Badge', href: 'https://homecoming.wiki/wiki/Troll_Task_Force_Member_Badge' },
  ],
  icon: [
    { alignment: 'H', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/time-h.png' },
    { alignment: 'V', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/time-v.png' },
  ],
}
