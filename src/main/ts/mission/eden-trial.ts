import { MissionData } from 'coh-content-db'
import { Woodsman } from '../contact/woodsman'

export const EdenTrial: MissionData = {
  key: 'eden-trial',
  name: 'Eden Trial',
  type: 'trial',
  morality: 'heroic',
  contactKeys: Woodsman.key,
  levelRange: [39],
  links: [
    { title: 'Eden Trial', href: 'https://homecoming.wiki/wiki/Eden_Trial' },
  ],
}
