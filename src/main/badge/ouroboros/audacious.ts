import { BadgeData } from 'coh-content-db'

export const Audacious: BadgeData = {
  type: 'OUROBOROS',
  key: 'audacious',
  setTitle: { id: 877 },
  name: [
    { value: 'Audacious' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { alignment: 'H', value: `You have completed a Task Force/Flashback between level 1 and 15 while the enemies were Buffed.` },
    { alignment: 'V', value: `You have completed a Strike Force/Flashback between level 1 and 15 while the enemies were Buffed.` },
  ],
  acquisition: 'Complete a level 1-15 Flashback story arc with enemies buffed.',
  links: [
    { title: 'Audacious Badge', href: 'https://homecoming.wiki/wiki/Audacious_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/audacious.png' }],
}
