import { BadgeData } from 'coh-content-db'

export const ProportionalSupremacy: BadgeData = {
  type: 'ouroboros',
  key: 'proportional-supremacy',
  setTitleId: [857],
  name: 'Proportional Supremacy',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: [
    { alignment: 'hero', value: `You have completed a Task Force/Flashback under the parameter of "3 Defeats Allowed" for the team.` },
    { alignment: 'villain', value: `You have completed a Strike Force/Flashback under the parameter of "3 Defeats Allowed" for the team.` },
  ],
  acquisition: 'Complete a Flashback story arc with three or fewer defeats.',
  links: [
    { title: 'Proportional Supremacy Badge', href: 'https://homecoming.wiki/wiki/Proportional_Supremacy_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/proportional-supremacy.png',
}
