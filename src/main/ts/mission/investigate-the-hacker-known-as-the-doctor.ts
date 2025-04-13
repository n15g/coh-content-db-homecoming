import { MissionData } from 'coh-content-db'
import { GordonStacy } from '../contact/gordon-stacy'

export const InvestigateTheHackerKnownAsTheDoctor: MissionData = {
  key: 'investigate-the-hacker-known-as-the-doctor',
  name: 'Investigate the Hacker known as The Doctor',
  type: 'mission',
  morality: 'heroic',
  contactKeys: GordonStacy.key,
  levelRange: [35, 39],
  links: [
    { title: 'Investigate the Hacker known as The Doctor', href: 'https://homecoming.wiki/wiki/Gordon_Stacy#Investigate_the_Hacker_known_as_The_Doctor_(35-40)' },
  ],
  flashback: {
    id: '0.37',
    name: 'They Call Me The Doctor',
    levelRange: [35, 39],
  },
}
