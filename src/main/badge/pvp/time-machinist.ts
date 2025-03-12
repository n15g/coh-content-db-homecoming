import { BadgeData } from 'coh-content-db'

export const TimeMachinist: BadgeData = {
  type: 'PVP',
  key: 'time-machinist',
  setTitle: { id: 564 },
  name: [
    { value: 'Time Machinist' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: 'You have taken over 10 pillboxes in Recluse\'s Victory, making you a Time Machinist.' },
  ],
  acquisition: 'Capture 10 pillboxes in Recluse\'s Victory',
  links: [
    { title: 'Time Machinist Badge', href: 'https://homecoming.wiki/wiki/Time_Machinist_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/pvp/time-machinist.png' },
  ],
}
