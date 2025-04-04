import { BadgeData } from 'coh-content-db'

export const Inhibited: BadgeData = {
  type: 'ouroboros',
  key: 'inhibited',
  setTitleId: [908],
  name: [
    { value: 'Inhibited' },
  ],
  morality: 'all',
  badgeText: [
    { alignment: 'hero', value: `You have completed a Task Force/Flashback between level 25 and 29 while not using any Temporary Powers.` },
    { alignment: 'villain', value: `You have completed a Strike Force/Flashback between level 25 and 29 while not using any Temporary Powers.` },
  ],
  acquisition: 'Complete a level 26-30 Flashback story arc using no temp powers. (Note: In game badge text is incorrect.)',
  links: [
    { title: 'Inhibited Badge', href: 'https://homecoming.wiki/wiki/Inhibited_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/inhibited.png' }],
}
