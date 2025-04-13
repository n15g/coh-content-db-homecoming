import { MissionData } from 'coh-content-db'
import { Hatchet } from '../contact/hatchet'

export const NoRoomForHumanity: MissionData = {
  key: 'no-room-for-humanity',
  name: 'No Room for Humanity',
  type: 'story-arc',
  morality: 'resistance',
  contactKeys: Hatchet.key,
  levelRange: [8, 15],
  links: [
    { title: 'No Room for Humanity', href: 'https://homecoming.wiki/wiki/Hatchet#No_Room_for_Humanity' },
  ],
  flashback: {
    id: '18.27',
    levelRange: [15, 19],
    morality: 'all',
  },
}
