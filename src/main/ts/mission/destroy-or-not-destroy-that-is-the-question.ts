import { MissionData } from 'coh-content-db'
import { JackHammer } from '../contact/jack-hammer'

export const DestroyOrNotDestroyThatIsTheQuestion: MissionData = {
  key: 'destroy-or-not-destroy-that-is-the-question',
  name: '"Destroy or Not Destroy, That is the Question"',
  type: 'story-arc',
  morality: 'resistance',
  contactKeys: JackHammer.key,
  levelRange: [1, 10],
  links: [
    { title: '"Destroy or Not Destroy, That is the Question"', href: 'https://homecoming.wiki/wiki/Jack_Hammer#%22Destroy_or_Not_Destroy,_That_is_the_Question%22' },
  ],
  flashback: {
    id: '18.12',
    name: 'Destroy or Not Destroy...',
    levelRange: [10, 14],
    morality: 'all',
  },
}
