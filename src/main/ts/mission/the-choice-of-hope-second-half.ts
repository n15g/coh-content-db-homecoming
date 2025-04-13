import { MissionData } from 'coh-content-db'
import { DreamDoctor } from '../contact/dream-doctor'

export const TheChoiceOfHopeSecondHalf: MissionData = {
  key: 'the-choice-of-hope-second-half',
  name: 'The Choice of Hope (Second Half)',
  type: 'story-arc',
  morality: 'primal',
  contactKeys: DreamDoctor.key,
  levelRange: [50],
  links: [
    { title: 'The Choice of Hope (Second Half)', href: 'https://homecoming.wiki/wiki/Dream_Doctor#The_Choice_of_Hope_(Second_Half)' },
  ],
  flashback: {
    id: '22.20',
    levelRange: [50],
  },
}
