import { BadgeData } from 'coh-content-db'
import { NotOnMyWatch } from './not-on-my-watch'
import { AlarmRaiser } from './alarm-raiser'
import { GottaKeepEmSeparated } from './gotta-keep-em-separated'
import { StrongPretty } from './strong-pretty'

export const MasterOfTheBAF: BadgeData = {
  type: 'ACHIEVEMENT',
  key: 'master-of-the-baf',
  setTitle: { id: 1979 },
  name: [
    { value: 'Master of the B.A.F.' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: 'You have mastered the Incarnate Trial: Behavioral Adjustment Facility.' },
  ],
  links: [
    { title: 'Master of the B.A.F. Badge', href: 'https://homecoming.wiki/wiki/Master_of_the_B.A.F._Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/master-of-the-baf.png' },
  ],
  requirements: [
    { key: NotOnMyWatch.key, type: 'BADGE', badgeKey: NotOnMyWatch.key },
    { key: AlarmRaiser.key, type: 'BADGE', badgeKey: AlarmRaiser.key },
    { key: GottaKeepEmSeparated.key, type: 'BADGE', badgeKey: GottaKeepEmSeparated.key },
    { key: StrongPretty.key, type: 'BADGE', badgeKey: StrongPretty.key },
  ],
}
