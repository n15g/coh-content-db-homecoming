import { MissionData } from 'coh-content-db'
import { Trepsarciel } from '../contact/trepsarciel'

export const SecondTreeOfThornsRespecificationTrial: MissionData = {
  key: 'second-tree-of-thorns-respecification-trial',
  name: 'Second Tree of Thorns Respecification Trial',
  type: 'trial',
  morality: 'villainous',
  contactKeys: Trepsarciel.key,
  levelRange: [34, 43],
  links: [
    { title: 'Tree of Thorns Respecification Trial', href: 'https://homecoming.wiki/wiki/Tree_of_Thorns_Respecification_Trial' },
  ],
}
