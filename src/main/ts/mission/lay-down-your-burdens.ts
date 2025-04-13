import { MissionData } from 'coh-content-db'
import { SondraCostel } from '../contact/sondra-costel'

export const LayDownYourBurdens: MissionData = {
  key: 'lay-down-your-burdens',
  name: 'Lay Down Your Burdens',
  type: 'story-arc',
  morality: 'heroic',
  contactKeys: SondraCostel.key,
  levelRange: [1, 7],
  links: [
    { title: 'Lay Down Your Burdens', href: 'https://homecoming.wiki/wiki/Sondra_Costel#Lay_Down_Your_Burdens' },
  ],
  flashback: {
    id: '21.03',
    levelRange: [1, 9],
  },
}
