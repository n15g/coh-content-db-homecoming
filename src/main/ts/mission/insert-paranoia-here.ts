import { MissionData } from 'coh-content-db'
import { Splice } from '../contact/splice'

export const InsertParanoiaHere: MissionData = {
  key: 'insert-paranoia-here',
  name: 'Insert Paranoia Here',
  type: 'story-arc',
  morality: 'resistance',
  contactKeys: Splice.key,
  levelRange: [1, 10],
  links: [
    { title: 'Insert Paranoia Here', href: 'https://homecoming.wiki/wiki/Splice#Insert_Paranoia_Here' },
  ],
  flashback: {
    id: '18.10',
    levelRange: [10, 14],
    morality: 'all',
  },
}
