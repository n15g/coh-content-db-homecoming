import { BadgeData } from 'coh-content-db'
import { Hacker } from './hacker'
import { MidnightDodgerWhatDodgesAtMidnight } from './midnight-dodger-what-dodges-at-midnight'
import { KittysGotClaws } from './kittys-got-claws'
import { ArmyOfNeu } from './army-of-neu'

export const MasterOfTinMagesTaskForce: BadgeData = {
  type: 'ACHIEVEMENT',
  key: 'master-of-tin-mages-task-force',
  setTitle: { id: 1940 },
  name: [
    { value: 'Master of Tin Mage\'s Task Force' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: 'You have gone through the Alpha and the Omega of Tin Mage\'s Task Force.' },
  ],
  links: [
    { title: 'Master of Tin Mage\'s Task Force Badge', href: 'https://homecoming.wiki/wiki/Master_of_Tin_Mage%27s_Task_Force_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/master-of-tin-mages-task-force.png' },
  ],
  requirements: [
    { key: Hacker.key, type: 'BADGE', badgeKey: Hacker.key },
    { key: MidnightDodgerWhatDodgesAtMidnight.key, type: 'BADGE', badgeKey: MidnightDodgerWhatDodgesAtMidnight.key },
    { key: KittysGotClaws.key, type: 'BADGE', badgeKey: KittysGotClaws.key },
    { key: ArmyOfNeu.key, type: 'BADGE', badgeKey: ArmyOfNeu.key },
  ],
}
