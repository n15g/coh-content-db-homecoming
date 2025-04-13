import { MissionData } from 'coh-content-db'
import { Trepsarciel } from '../contact/trepsarciel'
import { Ractespriel } from '../contact/ractespriel'

export const ThirdTreeOfThornsRespecificationTrial: MissionData = {
  key: 'third-tree-of-thorns-respecification-trial',
  name: 'Third Tree of Thorns Respecification Trial',
  type: 'trial',
  morality: 'villainous',
  contactKeys: Ractespriel.key,
  levelRange: [44],
  links: [
    { title: 'Tree of Thorns Respecification Trial', href: 'https://homecoming.wiki/wiki/Tree_of_Thorns_Respecification_Trial' },
  ],
}
