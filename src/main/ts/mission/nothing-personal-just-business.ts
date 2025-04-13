import { MissionData } from 'coh-content-db'
import { EagleEye } from '../contact/eagle-eye'

export const NothingPersonalJustBusiness: MissionData = {
  key: 'nothing-personal-just-business',
  name: 'Nothing Personal, Just Business',
  type: 'personal-story',
  morality: 'heroic',
  contactKeys: EagleEye.key,
  levelRange: [7, 20],
  links: [
    { title: 'Nothing Personal, Just Business', href: 'https://homecoming.wiki/wiki/Eagle_Eye#Nothing_Personal,_Just_Business' },
  ],
  flashback: {
    id: '24.03',
    name: `Deadlock's Personal Story`,
    levelRange: [15, 19],
  },
}
