import { BadgeData } from 'coh-content-db'
import { NotOnMyWatch } from './not-on-my-watch'
import { AlarmRaiser } from './alarm-raiser'
import { GottaKeepEmSeparated } from './gotta-keep-em-separated'
import { StrongPretty } from './strong-pretty'

export const MasterOfTheBAF: BadgeData = {
  type: 'achievement',
  key: 'master-of-the-baf',
  setTitleId: [1979],
  name: 'Master of the B.A.F.',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: 'You have mastered the Incarnate Trial: Behavioral Adjustment Facility.',
  links: [
    { title: 'Master of the B.A.F. Badge', href: 'https://homecoming.wiki/wiki/Master_of_the_B.A.F._Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/master-of-the-baf.png',
  requirements: [
    { key: NotOnMyWatch.key, type: 'badge', badgeKey: NotOnMyWatch.key },
    { key: AlarmRaiser.key, type: 'badge', badgeKey: AlarmRaiser.key },
    { key: GottaKeepEmSeparated.key, type: 'badge', badgeKey: GottaKeepEmSeparated.key },
    { key: StrongPretty.key, type: 'badge', badgeKey: StrongPretty.key },
  ],
}
