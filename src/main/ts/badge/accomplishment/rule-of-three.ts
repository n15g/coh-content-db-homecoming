import { BadgeData } from 'coh-content-db'
import { PositronTaskForcePartOne } from '../../mission/positron-task-force-part-one'

export const RuleOfThree: BadgeData = {
  type: 'accomplishment',
  key: 'rule-of-three',
  setTitleId: [1589],
  name: 'Rule of Three',
  morality: 'heroic',
  badgeText: [
    { alignment: 'hero', value: `You've joined the Freedom Phalanx's Task Force Program. In the process of proving yourself to Positron, you uncovered three villainous plots involving the Faultline Dam.` },
    { alignment: 'villain', value: `You've ditched the Freedom Phalanx's Task Force Program. You proved yourself to Positron by uncovering the Faultline Dam plots, but then turned your back on him.` },
  ],
  links: [
    { title: 'Rule of Three Badge', href: 'https://homecoming.wiki/wiki/Rule_of_Three_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/rule-of-three.png',
  requirements: [
    { key: PositronTaskForcePartOne.key, type: 'mission', missionKey: PositronTaskForcePartOne.key },
  ],
}
