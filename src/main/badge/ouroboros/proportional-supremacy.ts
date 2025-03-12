import { BadgeData } from 'coh-content-db'

export const ProportionalSupremacy: BadgeData = {
  type: 'OUROBOROS',
  key: 'proportional-supremacy',
  setTitle: { id: 857 },
  name: [
    { value: 'Proportional Supremacy' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { alignment: 'H', value: `You have completed a Task Force/Flashback under the parameter of "3 Defeats Allowed" for the team.` },
    { alignment: 'V', value: `You have completed a Strike Force/Flashback under the parameter of "3 Defeats Allowed" for the team.` },
  ],
  acquisition: 'Complete a Flashback story arc with three or fewer defeats.',
  links: [
    { title: 'Proportional Supremacy Badge', href: 'https://homecoming.wiki/wiki/Proportional_Supremacy_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/proportional-supremacy.png' }],
}
