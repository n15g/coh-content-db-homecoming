import { MissionData } from 'coh-content-db'
import { TeamUpTeleporter } from '../contact/team-up-teleporter'

export const DilemmaDiaboliqueTrial: MissionData = {
  key: 'dilemma-diabolique-trial',
  name: 'Dilemma Diabolique Trial',
  type: 'trial',
  morality: 'primal',
  contactKeys: TeamUpTeleporter.key,
  levelRange: [50],
  links: [
    { title: 'Dilemma Diabolique Trial', href: 'https://homecoming.wiki/wiki/Dilemma_Diabolique_Trial' },
  ],
}
