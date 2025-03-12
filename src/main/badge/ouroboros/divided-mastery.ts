import { BadgeData } from 'coh-content-db'

export const DividedMastery: BadgeData = {
  type: 'OUROBOROS',
  key: 'divided-mastery',
  setTitle: { id: 856 },
  name: [
    { value: 'Divided Mastery' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { alignment: 'H', value: `You have completed a Task Force/Flashback under the parameter of "1 Defeat Allowed" for the team.` },
    { alignment: 'V', value: `You have completed a Strike Force/Flashback under the parameter of "1 Defeat Allowed" for the team.` },
  ],
  acquisition: 'Complete a Flashback story arc with one or fewer defeats.',
  links: [
    { title: 'Divided Mastery Badge', href: 'https://homecoming.wiki/wiki/Divided_Mastery_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/divided-mastery.png' }],
}
