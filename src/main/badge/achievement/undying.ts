import { BadgeData } from 'coh-content-db'

export const Undying: BadgeData = {
  type: 'ACHIEVEMENT',
  key: 'undying',
  setTitle: { id: 234, praetorianId: 1685 },
  name: [
    { value: 'Undying' },
    { alignment: 'P', value: 'Never Learns' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: 'You can\'t be certain, but you believe that the possibility exists that you can not die.' },
    {
      alignment: 'P', value: 'Surely at some point, you will wake up and think, "Perhaps today I will stop courting certain '
        + 'doom." But obviously not today.',
    },
  ],
  acquisition: 'Pay off 600,000 debt',
  links: [
    { title: 'Undying Badge', href: 'https://homecoming.wiki/wiki/Undying_Badge' },
    { title: 'Never Learns Badge', href: 'https://homecoming.wiki/wiki/Never_Learns_Badge' },
  ],
  icon: [
    { alignment: 'H', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/debt-h.png' },
    { alignment: 'V', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/debt-v.png' },
  ],
}
