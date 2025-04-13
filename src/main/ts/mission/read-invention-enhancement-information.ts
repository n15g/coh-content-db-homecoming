import { MissionData } from 'coh-content-db'
import { JamesBright } from '../contact/james-bright'

export const ReadInventionEnhancementInformation: MissionData = {
  key: 'read-invention-enhancement-information',
  name: 'Read Invention Enhancement Information',
  type: 'mission',
  morality: 'villainous',
  contactKeys: JamesBright.key,
  levelRange: [10, 50],
  links: [
    { title: 'Read Invention Enhancement Information', href: 'https://homecoming.wiki/wiki/James_Bright#Read_Invention_Enhancement_Information' },
  ],
}
