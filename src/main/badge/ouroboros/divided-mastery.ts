import { BadgeData } from 'coh-content-db'

export const DividedMastery: BadgeData = {
  type: 'ouroboros',
  key: 'divided-mastery',
  setTitleId: [856],
  name: [
    { value: 'Divided Mastery' },
  ],
  morality: 'all',
  badgeText: [
    { alignment: 'hero', value: `You have completed a Task Force/Flashback under the parameter of "1 Defeat Allowed" for the team.` },
    { alignment: 'villain', value: `You have completed a Strike Force/Flashback under the parameter of "1 Defeat Allowed" for the team.` },
  ],
  acquisition: 'Complete a Flashback story arc with one or fewer defeats.',
  links: [
    { title: 'Divided Mastery Badge', href: 'https://homecoming.wiki/wiki/Divided_Mastery_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/divided-mastery.png' }],
}
