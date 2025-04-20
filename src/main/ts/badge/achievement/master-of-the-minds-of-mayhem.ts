import { BadgeData } from 'coh-content-db'
import { MentalVoyager } from '../accomplishment/mental-voyager'
import { Dreamwalker } from './dreamwalker'
import { APerfectStorm } from './a-perfect-storm'
import { DaylightSaver } from './daylight-saver'
import { LostConnectionToServer } from './lost-connection-to-server'

export const MasterOfTheMindsOfMayhem: BadgeData = {
  type: 'achievement',
  key: 'master-of-minds-of-mayhem',
  setTitleId: [2083],
  name: 'Master of the Minds of Mayhem',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: 'You have mastered the Incarnate Trial: The Minds of Mayhem.',
  links: [
    { title: 'Master of the Minds of Mayhem Badge', href: 'https://homecoming.wiki/wiki/Master_of_the_Minds_of_Mayhem_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/master-of-the-minds-of-mayhem.png',
  requirements: [
    { key: MentalVoyager.key, type: 'badge', badgeKey: MentalVoyager.key },
    { key: Dreamwalker.key, type: 'badge', badgeKey: Dreamwalker.key },
    { key: APerfectStorm.key, type: 'badge', badgeKey: APerfectStorm.key },
    { key: DaylightSaver.key, type: 'badge', badgeKey: DaylightSaver.key },
    { key: LostConnectionToServer.key, type: 'badge', badgeKey: LostConnectionToServer.key },
  ],
}
