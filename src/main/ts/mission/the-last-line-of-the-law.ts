import { MissionData } from 'coh-content-db'
import { BelladonnaVetrano } from '../contact/belladonna-vetrano'

export const TheLastLineOfTheLaw: MissionData = {
  key: 'the-last-line-of-the-law',
  name: 'The Last Line of the Law',
  type: 'personal-story',
  morality: 'primal',
  contactKeys: BelladonnaVetrano.key,
  levelRange: [50],
  links: [
    { title: 'The Last Line of the Law', href: 'https://homecoming.wiki/wiki/Belladonna_Vetrano_(Contact)#The_Last_Line_of_the_Law' },
  ],
  flashback: {
    id: '23.07',
    name: `Emperor Cole's Personal Story`,
    levelRange: [50],
  },
}
