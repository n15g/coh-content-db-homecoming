import { BadgeData } from 'coh-content-db'

export const Undying: BadgeData = {
  type: 'achievement',
  key: 'undying',
  setTitleId: [234, 1685],
  name: [
    { value: 'Undying' },
    { alignment: 'praetorian', value: 'Never Learns' },
  ],
  morality: 'all',
  badgeText: [
    { value: `You can't be certain, but you believe that the possibility exists that you can not die.` },
    { alignment: 'praetorian', value: 'Surely at some point, you will wake up and think, "Perhaps today I will stop courting certain doom." But obviously not today.' },
  ],
  acquisition: 'Pay off 600,000 debt.',
  links: [
    { title: 'Undying Badge', href: 'https://homecoming.wiki/wiki/Undying_Badge' },
    { title: 'Never Learns Badge', href: 'https://homecoming.wiki/wiki/Never_Learns_Badge' },
  ],
  icon: [
    { alignment: 'hero', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/debt-h.png' },
    { alignment: 'villain', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/debt-v.png' },
  ],
}
