import { MissionData } from 'coh-content-db'
import { DrFrancois } from '../contact/dr-francois'

export const JustPrototypical: MissionData = {
  key: 'just-prototypical',
  name: 'Just Prototypical',
  type: 'story-arc',
  morality: 'villainous',
  contactKeys: DrFrancois.key,
  levelRange: [20, 24],
  links: [
    { title: 'Just Prototypical', href: 'https://homecoming.wiki/wiki/Dr._Francois#Just_Prototypical_(20-24)' },
  ],
  flashback: {
    id: '27.91',
    levelRange: [20, 24],
  },
}
