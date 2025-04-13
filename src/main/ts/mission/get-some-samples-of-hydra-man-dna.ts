import { MissionData } from 'coh-content-db'
import { UnaiKemen } from '../contact/unai-kemen'

export const GetSomeSamplesOfHydraManDna: MissionData = {
  key: 'get-some-samples-of-hydra-man-dna',
  name: 'Get some samples of Hydra Man DNA',
  type: 'mission',
  morality: 'heroic',
  contactKeys: UnaiKemen.key,
  levelRange: [45, 50],
  links: [
    { title: 'Get some samples of Hydra Man DNA', href: 'https://homecoming.wiki/wiki/Unai_Kemen#Get_some_samples_of_Hydra_Man_DNA' },
  ],
}
