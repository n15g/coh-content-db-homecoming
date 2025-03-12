import { BadgeData } from 'coh-content-db'

export const PainKiller: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'pain-killer',
  setTitle: { id: 1599 },
  name: [
    { value: 'Pain Killer' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: 'You\'ve completed the Cathedral of Pain and thwarted the Aspect of Rularuu\'s plans.' },
  ],
  acquisition: 'Complete the Cathedral of Pain trial.',
  links: [
    { title: 'Pain Killer Badge', href: 'https://homecoming.wiki/wiki/Pain_Killer_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/pain-killer.png' },
  ],
}
