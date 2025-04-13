import { MissionData } from 'coh-content-db'
import { BaneSpiderRuben } from '../contact/bane-spider-ruben'

export const DestinyFollows: MissionData = {
  key: 'destiny-follows',
  name: 'Destiny Follows',
  type: 'story-arc',
  morality: 'villainous',
  contactKeys: BaneSpiderRuben.key,
  levelRange: [15, 24],
  links: [
    { title: 'Destiny Follows', href: 'https://homecoming.wiki/wiki/Bane_Spider_Ruben#Destiny_Follows' },
  ],
  flashback: {
    id: '22.03',
    levelRange: [20, 24],
  },
}
