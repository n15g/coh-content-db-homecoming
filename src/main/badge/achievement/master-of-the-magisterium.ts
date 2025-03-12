import { BadgeData } from 'coh-content-db'

export const MasterOfTheMagisterium: BadgeData = {
  type: 'ACHIEVEMENT',
  key: 'master-of-magisterium',
  setTitle: { id: 2225 },
  name: [
    { value: 'Master of the Magisterium' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: 'You have mastered the Incarnate Trial: Magisterium.' },
  ],
  acquisition: 'Earn the Triple Threat, Ready to Rumble, Shadow Master, and The Hard Way badges',
  links: [
    { title: 'Master of the Magisterium Badge', href: 'https://homecoming.wiki/wiki/Master_of_the_Magisterium_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/master-of-the-magisterium.png' },
  ],
}
