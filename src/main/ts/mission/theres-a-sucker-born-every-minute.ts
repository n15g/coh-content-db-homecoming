import { MissionData } from 'coh-content-db'
import { WillyWheeler } from '../contact/willy-wheeler'

export const TheresASuckerBornEveryMinute: MissionData = {
  key: 'theres-a-sucker-born-every-minute',
  name: `There's a Sucker Born Every Minute`,
  type: 'story-arc',
  morality: 'villainous',
  contactKeys: WillyWheeler.key,
  levelRange: [15, 19],
  links: [
    { title: `There's a Sucker Born Every Minute`, href: `https://homecoming.wiki/wiki/Willy_Wheeler#There's_a_Sucker_Born_Every_Minute` },
  ],
  flashback: {
    id: '6.25',
    levelRange: [15, 19],
  },
}
