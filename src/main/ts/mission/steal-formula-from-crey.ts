import { MissionData } from 'coh-content-db'
import { EfficiencyExpertPither } from '../contact/efficiency-expert-pither'

export const StealFormulaFromCrey: MissionData = {
  key: 'steal-formula-from-crey',
  name: 'Steal formula from Crey',
  type: 'mission',
  morality: 'villainous',
  contactKeys: EfficiencyExpertPither.key,
  levelRange: [45],
  links: [
    { title: 'Steal formula from Crey', href: 'https://homecoming.wiki/wiki/Efficiency_Expert_Pither#Steal_formula_from_Crey' },
  ],
}
