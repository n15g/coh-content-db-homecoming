import { MissionData } from 'coh-content-db'
import { TeamUpTeleporter } from '../contact/team-up-teleporter'

export const KeyesIslandReactorTrial: MissionData = {
  key: 'keyes-island-reactor-trial',
  name: 'Keyes Island Reactor Trial',
  type: 'trial',
  morality: 'primal',
  contactKeys: TeamUpTeleporter.key,
  levelRange: [50],
  links: [
    { title: 'Keyes Island Reactor Trial', href: 'https://homecoming.wiki/wiki/Keyes_Island_Reactor_Trial' },
  ],
}
