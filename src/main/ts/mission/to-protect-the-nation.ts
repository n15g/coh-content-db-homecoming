import { MissionData } from 'coh-content-db'
import { Max } from '../contact/max'

export const ToProtectTheNation: MissionData = {
  key: 'to-protect-the-nation',
  name: 'To Protect the Nation',
  type: 'personal-story',
  morality: 'primal',
  contactKeys: Max.key,
  levelRange: [50],
  links: [
    { title: 'To Protect the Nation', href: 'https://homecoming.wiki/wiki/Max#To_Protect_the_Nation' },
  ],
  flashback: {
    id: '22.15',
    name: `Max's Personal Story`,
    levelRange: [50],
  },
}
