import { MissionData } from 'coh-content-db'
import { Sparcetriel } from '../contact/sparcetriel'

export const FirstTreeOfThornsRespecificationTrial: MissionData = {
  key: 'first-tree-of-thorns-respecification-trial',
  name: 'First Tree of Thorns Respecification Trial',
  type: 'trial',
  morality: 'villainous',
  contactKeys: Sparcetriel.key,
  levelRange: [24, 33],
  links: [
    { title: 'Tree of Thorns Respecification Trial', href: 'https://homecoming.wiki/wiki/Tree_of_Thorns_Respecification_Trial' },
  ],
}
