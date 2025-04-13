import { MissionData } from 'coh-content-db'
import { JackHammer } from '../contact/jack-hammer'

export const IDestroyThereforeIAm: MissionData = {
  key: 'i-destroy-therefore-i-am',
  name: 'I Destroy, Therefore I Am!',
  type: 'story-arc',
  morality: 'resistance',
  contactKeys: JackHammer.key,
  levelRange: [1, 10],
  links: [
    { title: 'I Destroy, Therefore I Am!', href: 'https://homecoming.wiki/wiki/Jack_Hammer#I_Destroy,_Therefore_I_Am!' },
  ],
  flashback: {
    id: '18.11',
    levelRange: [10, 14],
    morality: 'all',
  },
}
