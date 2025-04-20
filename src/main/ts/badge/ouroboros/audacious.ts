import { BadgeData } from 'coh-content-db'

export const Audacious: BadgeData = {
  type: 'ouroboros',
  key: 'audacious',
  setTitleId: [877],
  name: 'Audacious',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: [
    { alignment: 'hero', value: `You have completed a Task Force/Flashback between level 1 and 15 while the enemies were Buffed.` },
    { alignment: 'villain', value: `You have completed a Strike Force/Flashback between level 1 and 15 while the enemies were Buffed.` },
  ],
  acquisition: 'Complete a level 1-15 Flashback story arc with enemies buffed.',
  links: [
    { title: 'Audacious Badge', href: 'https://homecoming.wiki/wiki/Audacious_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/audacious.png',
}
