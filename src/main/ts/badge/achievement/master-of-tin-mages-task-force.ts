import { BadgeData } from 'coh-content-db'
import { Hacker } from './hacker'
import { MidnightDodgerWhatDodgesAtMidnight } from './midnight-dodger-what-dodges-at-midnight'
import { KittysGotClaws } from './kittys-got-claws'
import { ArmyOfNeu } from './army-of-neu'

export const MasterOfTinMagesTaskForce: BadgeData = {
  type: 'achievement',
  key: 'master-of-tin-mages-task-force',
  setTitleId: [1940],
  name: `Master of Tin Mage's Task Force`,
  morality: 'all',
  badgeText: `You have gone through the Alpha and the Omega of Tin Mage's Task Force.`,
  links: [
    { title: `Master of Tin Mage's Task Force Badge`, href: 'https://homecoming.wiki/wiki/Master_of_Tin_Mage%27s_Task_Force_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/master-of-tin-mages-task-force.png',
  requirements: [
    { key: Hacker.key, type: 'badge', badgeKey: Hacker.key },
    { key: MidnightDodgerWhatDodgesAtMidnight.key, type: 'badge', badgeKey: MidnightDodgerWhatDodgesAtMidnight.key },
    { key: KittysGotClaws.key, type: 'badge', badgeKey: KittysGotClaws.key },
    { key: ArmyOfNeu.key, type: 'badge', badgeKey: ArmyOfNeu.key },
  ],
}
