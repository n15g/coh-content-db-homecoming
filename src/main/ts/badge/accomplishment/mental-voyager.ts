import { BadgeData } from 'coh-content-db'
import { MindsOfMayhemTrial } from '../../mission/minds-of-mayhem-trial'

export const MentalVoyager: BadgeData = {
  type: 'accomplishment',
  key: 'mental-voyager',
  setTitleId: [2078],
  name: 'Mental Voyager',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: 'You have completed the Incarnate Trial: The Minds of Mayhem.',
  links: [
    { title: 'Mental Voyager Badge', href: 'https://homecoming.wiki/wiki/Mental_Voyager_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/mental-voyager.png',
  requirements: [
    { key: MindsOfMayhemTrial.key, type: 'mission', missionKey: MindsOfMayhemTrial.key },
  ],
}
