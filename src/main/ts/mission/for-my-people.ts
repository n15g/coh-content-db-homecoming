import { MissionData } from 'coh-content-db'
import { SisterSolaris } from '../contact/sister-solaris'

export const ForMyPeople: MissionData = {
  key: 'for-my-people',
  name: 'For My People',
  type: 'personal-story',
  morality: 'primal',
  contactKeys: SisterSolaris.key,
  levelRange: [50],
  links: [
    { title: 'For My People', href: 'https://homecoming.wiki/wiki/Sister_Solaris#For_My_People' },
  ],
  flashback: {
    id: '22.19',
    name: `Marcus Valerius's Personal Story`,
    levelRange: [50],
  },
}
