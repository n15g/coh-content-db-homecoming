import { MissionData } from 'coh-content-db'
import { PraetorDuncan } from '../contact/praetor-duncan'

export const OneLooseEnd: MissionData = {
  key: 'one-loose-end',
  name: 'One Loose End',
  type: 'personal-story',
  morality: 'primal',
  contactKeys: PraetorDuncan.key,
  levelRange: [50],
  links: [
    { title: 'One Loose End', href: 'https://homecoming.wiki/wiki/Praetor_Duncan#One_Loose_End' },
  ],
  flashback: {
    id: '22.17',
    name: `Praetor Duncan's Personal Story`,
    levelRange: [50],
  },
}
