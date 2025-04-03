import { BadgeData } from 'coh-content-db'
import { Positron } from '../../contact/positron'

export const RuleOfThree: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'rule-of-three',
  setTitle: { id: 1589 },
  name: 'Rule of Three',
  alignment: ['H'],
  badgeText: [
    { alignment: 'H', value: `You've joined the Freedom Phalanx's Task Force Program. In the process of proving yourself to Positron, you uncovered three villainous plots involving the Faultline Dam.` },
    { alignment: 'V', value: `You've ditched the Freedom Phalanx's Task Force Program. You proved yourself to Positron by uncovering the Faultline Dam plots, but then turned your back on him.` },
  ],
  links: [
    { title: 'Rule of Three Badge', href: 'https://homecoming.wiki/wiki/Rule_of_Three_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/rule-of-three.png',
  requirements: [
    { key: 'ptfpo', type: 'TASK_FORCE', missionName: 'Positron Task Force Part One', contactKey: Positron.key },
  ],
}
