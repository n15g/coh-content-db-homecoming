import { MissionData } from 'coh-content-db'
import { DavidWincott } from '../contact/david-wincott'

export const OfficerWincottVsTheTrolls: MissionData = {
  key: 'officer-wincott-vs-the-trolls',
  name: 'Officer Wincott vs. the Trolls',
  type: 'story-arc',
  morality: 'heroic',
  contactKeys: DavidWincott.key,
  levelRange: [5, 14],
  links: [
    { title: 'Officer Wincott vs. the Trolls', href: 'https://homecoming.wiki/wiki/David_Wincott#Officer_Wincott_vs._the_Trolls_(5-14)' },
  ],
  flashback: {
    id: '2.01',
    levelRange: [10, 14],
  },
}
