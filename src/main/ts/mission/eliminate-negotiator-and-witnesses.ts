import { MissionData } from 'coh-content-db'
import { OperativeKirkland } from '../contact/operative-kirkland'

export const EliminateNegotiatorAndWitnesses: MissionData = {
  key: 'eliminate-negotiator-and-witnesses',
  name: 'Eliminate Negotiator and Witnesses',
  type: 'mission',
  morality: 'villainous',
  contactKeys: OperativeKirkland.key,
  levelRange: [25, 29],
  links: [
    { title: 'Eliminate Negotiator and Witnesses', href: 'https://homecoming.wiki/wiki/Operative_Kirkland#Eliminate_Negotiator_and_Witnesses' },
  ],
}
