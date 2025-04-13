import { MissionData } from 'coh-content-db'
import { TeamUpTeleporter } from '../contact/team-up-teleporter'

export const BehavioralAdjustmentFacilityTrial: MissionData = {
  key: 'behavioral-adjustment-facility-trial',
  name: 'Behavioral Adjustment Facility Trial',
  type: 'trial',
  morality: 'primal',
  contactKeys: TeamUpTeleporter.key,
  levelRange: [50],
  links: [
    { title: 'Behavioral Adjustment Facility Trial', href: 'https://homecoming.wiki/wiki/Behavioral_Adjustment_Facility_Trial' },
  ],
}
