import { MissionData } from 'coh-content-db'
import { DocBuzzsaw } from '../contact/doc-buzzsaw'

export const TheFreakishLabOfDrVahzilokAct2: MissionData = {
  key: 'the-freakish-lab-of-dr-vahzilok-act-2',
  name: 'The Freakish Lab of Dr. Vahzilok, Act 2',
  type: 'story-arc',
  morality: 'villainous',
  contactKeys: DocBuzzsaw.key,
  levelRange: [25, 39],
  links: [
    { title: 'The Freakish Lab of Dr. Vahzilok, Act 2', href: 'https://homecoming.wiki/wiki/Doc_Buzzsaw#The_Freakish_Lab_of_Dr._Vahzilok,_Act_2' },
  ],
  flashback: {
    id: '27.03',
    levelRange: [35, 39],
  },
}
