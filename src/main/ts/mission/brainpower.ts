import { MissionData } from 'coh-content-db'
import { GhostWidow } from '../contact/ghost-widow'

export const Brainpower: MissionData = {
  key: 'brainpower',
  name: 'Brainpower',
  type: 'story-arc',
  morality: 'villainous',
  contactKeys: GhostWidow.key,
  levelRange: [45],
  links: [
    { title: 'Brainpower', href: 'https://homecoming.wiki/wiki/Ghost_Widow#Brainpower_(45-50)' },
  ],
  flashback: {
    id: '7.48',
    name: 'Operation DESTINY files',
    levelRange: [50],
  },
}
