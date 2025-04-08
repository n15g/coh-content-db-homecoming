import { BadgeData } from 'coh-content-db'

export const Intrepid: BadgeData = {
  type: 'ouroboros',
  key: 'intrepid',
  setTitleId: [885],
  name: 'Intrepid',
  morality: 'all',
  badgeText: [
    { alignment: 'hero', value: `You have completed a Task Force/Flashback between level 46 and 50 while the enemies were Buffed.` },
    { alignment: 'villain', value: `You have completed a Strike Force/Flashback between level 46 and 50 while the enemies were Buffed.` },
  ],
  acquisition: 'Complete a level 46-50 Flashback story arc with enemies buffed.',
  links: [
    { title: 'Intrepid Badge', href: 'https://homecoming.wiki/wiki/Intrepid_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/intrepid.png',
}
