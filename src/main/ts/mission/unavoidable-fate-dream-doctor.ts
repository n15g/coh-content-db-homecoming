import { MissionData } from 'coh-content-db'
import { DreamDoctor } from '../contact/dream-doctor'

export const UnavoidableFateDreamDoctor: MissionData = {
  key: 'unavoidable-fate-dream-doctor',
  name: 'Unavoidable Fate (Dream Doctor)',
  type: 'personal-story',
  morality: 'primal',
  contactKeys: DreamDoctor.key,
  levelRange: [50],
  links: [
    { title: 'Unavoidable Fate', href: 'https://homecoming.wiki/wiki/Dream_Doctor#Unavoidable_Fate' },
  ],
  flashback: {
    id: '22.21',
    name: `Dream Doctor's Personal Story`,
    levelRange: [50],
  },
}
