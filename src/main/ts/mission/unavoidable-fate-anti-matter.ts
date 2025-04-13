import { MissionData } from 'coh-content-db'
import { NumberSix } from '../contact/number-six'

export const UnavoidableFateAntiMatter: MissionData = {
  key: 'unavoidable-fate-anti-matter',
  name: 'Unavoidable Fate (Anti Matter)',
  type: 'personal-story',
  morality: 'primal',
  contactKeys: NumberSix.key,
  levelRange: [50],
  links: [
    { title: 'Unavoidable Fate', href: 'https://homecoming.wiki/wiki/Number_Six#Unavoidable_Fate' },
  ],
  flashback: {
    id: '24.16',
    name: `Anti-Matter's Personal Story`,
    levelRange: [50],
  },
}
