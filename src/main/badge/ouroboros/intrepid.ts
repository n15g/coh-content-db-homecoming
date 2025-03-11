import { BadgeData } from 'coh-content-db'

export const Intrepid: BadgeData = {
  type: 'OUROBOROS',
  key: 'intrepid',
  setTitle: { id: 885 },
  name: [
    { value: 'Intrepid' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { alignment: 'H', value: `You have completed a Task Force/Flashback between level 46 and 50 while the enemies were Buffed.` },
    { alignment: 'V', value: `You have completed a Strike Force/Flashback between level 46 and 50 while the enemies were Buffed.` },
  ],
  acquisition: 'Complete a level 46-50 Flashback story arc with enemies buffed.',
  links: [
    { title: 'Intrepid Badge', href: 'https://homecoming.wiki/wiki/Intrepid_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/intrepid.png' }],
}
