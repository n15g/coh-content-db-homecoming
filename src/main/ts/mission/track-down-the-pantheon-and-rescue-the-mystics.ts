import { MissionData } from 'coh-content-db'
import { MiriamBloechl } from '../contact/miriam-bloechl'
import { LauraBrunetti } from '../contact/laura-brunetti'

export const TrackDownThePantheonAndRescueTheMystics: MissionData = {
  key: 'track-down-the-pantheon-and-rescue-the-mystics',
  name: 'Track down the Pantheon and rescue the mystics',
  type: 'mission',
  morality: 'heroic',
  contactKeys: [MiriamBloechl.key, LauraBrunetti.key],
  levelRange: [25, 30],
  links: [
    { title: '(Miriam Bloechl) Track down the Pantheon and rescue the mystics', href: 'https://homecoming.wiki/wiki/Miriam_Bloechl#Track_down_the_Pantheon_and_rescue_the_mystics_(25-30)' },
    { title: '(Laura Brunetti) Track down the Pantheon and rescue the mystics', href: 'https://homecoming.wiki/wiki/Laura_Brunetti#Track_down_the_Pantheon_and_rescue_the_mystics_(25-30)' },
  ],
  flashback: {
    id: '0.18',
    name: 'Find the Pantheon: Rescue the Mystics',
    levelRange: [25, 29],
  },
}
