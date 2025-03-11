import { BadgeData } from 'coh-content-db'

export const HeardTheCall: BadgeData = {
  type: 'ACHIEVEMENT',
  key: 'heard-the-call',
  setTitle: { id: 1454 },
  name: [
    { value: 'Heard the Call' },
  ],
  alignment: ['H'],
  badgeText: [
    {
      value: 'You completed a Hero Morality Mission and then maintained your Hero alignment for 7 days '
        + 'earning yourself this badge.',
    },
  ],
  acquisition: 'Maintain a Hero alignment for 7 days',
  links: [
    { title: 'Heard the Call Badge', href: 'https://homecoming.wiki/wiki/Heard_the_Call_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/heard-the-call.png' },
  ],
}
