import { BadgeData } from 'coh-content-db'
import { BaneSpiderRuben } from '../../contact/bane-spider-ruben'

export const GiftedSpeaker: BadgeData = {
  type: 'achievement',
  key: 'gifted-speaker',
  setTitleId: [2095],
  name: 'Gifted Speaker',
  morality: 'villainous',
  badgeText: 'You know how to work a crowd when you need to. With the help of a psychic suggestion device, of course.',
  links: [
    { title: 'Gifted Speaker Badge', href: 'https://homecoming.wiki/wiki/Gifted_Speaker_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/gifted-speaker.png',
  requirements: [
    { key: 'df', type: 'ARC', missionName: 'Destiny Follows', contactKey: BaneSpiderRuben.key },
  ],
}
