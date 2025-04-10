import { BadgeData } from 'coh-content-db'

export const Fearless: BadgeData = {
  type: 'ouroboros',
  key: 'fearless',
  setTitleId: [881],
  name: 'Fearless',
  morality: 'all',
  badgeText: [
    { alignment: 'hero', value: `You have completed a Task Force/Flashback between level 25 and 29 while the enemies were Buffed.` },
    { alignment: 'villain', value: `You have completed a Strike Force/Flashback between level 25 and 29 while the enemies were Buffed.` },
  ],
  acquisition: 'Complete a level 26-30 Flashback story arc with enemies buffed.',
  notes: `**Note:** In-game badge text is incorrect.`,
  links: [
    { title: 'Fearless Badge', href: 'https://homecoming.wiki/wiki/Fearless_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/fearless.png',
}
