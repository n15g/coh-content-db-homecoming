import { MissionData } from 'coh-content-db'
import { WyllieGalloway } from '../contact/wyllie-galloway'

export const DeathResurrected: MissionData = {
  key: 'death-resurrected',
  name: 'Death Resurrected',
  type: 'story-arc',
  morality: 'any',
  contactKeys: WyllieGalloway.key,
  levelRange: [40],
  links: [
    { title: 'Death Resurrected', href: 'https://homecoming.wiki/wiki/Wyllie_Galloway#Death_Resurrected' },
  ],
}
