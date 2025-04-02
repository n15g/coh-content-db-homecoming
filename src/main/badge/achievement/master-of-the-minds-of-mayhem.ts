import { BadgeData } from 'coh-content-db'
import { MentalVoyager } from '../accomplishment/mental-voyager'
import { Dreamwalker } from './dreamwalker'
import { APerfectStorm } from './a-perfect-storm'
import { DaylightSaver } from './daylight-saver'
import { LostConnectionToServer } from './lost-connection-to-server'

export const MasterOfTheMindsOfMayhem: BadgeData = {
  type: 'ACHIEVEMENT',
  key: 'master-of-minds-of-mayhem',
  setTitle: { id: 2083 },
  name: [
    { value: 'Master of the Minds of Mayhem' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: 'You have mastered the Incarnate Trial: The Minds of Mayhem.' },
  ],
  links: [
    { title: 'Master of the Minds of Mayhem Badge', href: 'https://homecoming.wiki/wiki/Master_of_the_Minds_of_Mayhem_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/master-of-the-minds-of-mayhem.png' },
  ],
  requirements: [
    { key: MentalVoyager.key, type: 'BADGE', badgeKey: MentalVoyager.key },
    { key: Dreamwalker.key, type: 'BADGE', badgeKey: Dreamwalker.key },
    { key: APerfectStorm.key, type: 'BADGE', badgeKey: APerfectStorm.key },
    { key: DaylightSaver.key, type: 'BADGE', badgeKey: DaylightSaver.key },
    { key: LostConnectionToServer.key, type: 'BADGE', badgeKey: LostConnectionToServer.key },
  ],
}
