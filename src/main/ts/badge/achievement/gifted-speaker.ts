import { BadgeData } from 'coh-content-db'
import { DestinyFollows } from '../../mission/destiny-follows'

export const GiftedSpeaker: BadgeData = {
  type: 'achievement',
  key: 'gifted-speaker',
  setTitleId: [2095],
  name: 'Gifted Speaker',
  releaseDate: '2012-11-30',
  morality: 'villainous',
  badgeText: 'You know how to work a crowd when you need to. With the help of a psychic suggestion device, of course.',
  links: [
    { title: 'Gifted Speaker Badge', href: 'https://homecoming.wiki/wiki/Gifted_Speaker_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/gifted-speaker.png',
  requirements: [
    { key: DestinyFollows.key, type: 'mission', missionKey: DestinyFollows.key },
  ],
}
