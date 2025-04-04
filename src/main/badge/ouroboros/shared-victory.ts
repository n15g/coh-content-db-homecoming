import { BadgeData } from 'coh-content-db'

export const SharedVictory: BadgeData = {
  type: 'ouroboros',
  key: 'shared-victory',
  setTitleId: [858],
  name: [
    { value: 'Shared Victory' },
  ],
  morality: 'all',
  badgeText: [
    { alignment: 'hero', value: `You have completed a Task Force/Flashback under the parameter of "5 Defeats Allowed" for the team.` },
    { alignment: 'villain', value: `You have completed a Strike Force/Flashback under the parameter of "5 Defeats Allowed" for the team.` },
  ],
  acquisition: 'Complete a Flashback story arc with five or fewer defeats.',
  links: [
    { title: 'Shared Victory Badge', href: 'https://homecoming.wiki/wiki/Shared_Victory_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/shared-victory.png' }],
}
