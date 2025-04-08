import { MissionData } from 'coh-content-db'
import { CityRepresentative } from '../contact/city-representative'

export const OmegaTeamMemorial: MissionData = {
  key: 'omega-team-memorial',
  name: 'Omega Team Memorial (Cape Mission)',
  type: 'mission',
  morality: 'heroic',
  contactKeys: CityRepresentative.key,
  levelRange: [20],
  links: [{ title: 'Omega Team Memorial', href: 'https://homecoming.wiki/wiki/City_Representative#Omega_Team_Memorial' }],
}
