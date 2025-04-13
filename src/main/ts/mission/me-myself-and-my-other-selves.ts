import { MissionData } from 'coh-content-db'
import { DeanMacArthur } from '../contact/dean-macarthur'

export const MeMyselfAndMyOtherSelves: MissionData = {
  key: 'me-myself-and-my-other-selves',
  name: 'Me, Myself, and My Other Selves',
  type: 'story-arc',
  morality: 'villainous',
  contactKeys: DeanMacArthur.key,
  levelRange: [20, 29],
  links: [
    { title: 'Me, Myself, and My Other Selves', href: 'https://homecoming.wiki/wiki/Dean_MacArthur#Me,_Myself,_and_My_Other_Selves_(20-29)' },
  ],
  flashback: {
    id: '17.03',
    levelRange: [25, 29],
  },
}
