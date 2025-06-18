import { MissionData } from 'coh-content-db'
import { DapDapThaDealMaka } from '../contact/dap-dap-tha-deal-maka'

export const MergersAndAcquisitions: MissionData = {
  key: 'mergers-and-acquisitions',
  name: 'Mergers and Acquisitions',
  type: 'story-arc',
  morality: 'villainous',
  contactKeys: DapDapThaDealMaka.key,
  levelRange: [40, 50],
  links: [
    { title: 'Mergers and Acquisitions', href: 'https://homecoming.wiki/wiki/Dap-Dap_tha_Deal-Maka#Mergers_and_Acquisitions' },
  ],
  flashback: {
    id: '28.02',
    levelRange: [50],
  },
}
