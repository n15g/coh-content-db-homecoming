import { MissionData } from 'coh-content-db'
import { EfficiencyExpertPither } from '../contact/efficiency-expert-pither'

export const BeatSomeSenseIntoFortunataIverson: MissionData = {
  key: 'beat-some-sense-into-fortunata-iverson',
  name: 'Beat some sense into Fortunata Iverson',
  type: 'mission',
  morality: 'villainous',
  contactKeys: EfficiencyExpertPither.key,
  levelRange: [45],
  links: [
    { title: 'Beat some sense into Fortunata Iverson', href: 'https://homecoming.wiki/wiki/Efficiency_Expert_Pither#Beat_some_sense_into_Fortunata_Iverson' },
  ],
}
