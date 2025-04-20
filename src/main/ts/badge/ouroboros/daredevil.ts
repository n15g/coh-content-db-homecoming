import { BadgeData } from 'coh-content-db'

export const Daredevil: BadgeData = {
  type: 'ouroboros',
  key: 'daredevil',
  setTitleId: [872],
  name: 'Daredevil',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: [
    { alignment: 'hero', value: `You have completed a Task Force/Flashback between level 25 and 29 while under a constant Debuff.` },
    { alignment: 'villain', value: `You have completed a Strike Force/Flashback between level 25 and 29 while under a constant Debuff.` },
  ],
  acquisition: 'Complete a level 26-30 Flashback story arc while debuffed.',
  notes: `**Note:** In-game badge text is incorrect.`,
  links: [
    { title: 'Daredevil Badge', href: 'https://homecoming.wiki/wiki/Daredevil_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/daredevil.png',
}
