import { MissionData } from 'coh-content-db'
import { CaptainJamesHarlan } from '../contact/captain-james-harlan'

export const SecondTerraVoltaRespecificationTrial: MissionData = {
  key: 'second-terra-volta-respecification-trial',
  name: 'Second Terra Volta Respecification Trial',
  type: 'trial',
  morality: 'heroic',
  contactKeys: CaptainJamesHarlan.key,
  levelRange: [34, 43],
  links: [
    { title: 'Terra Volta Respecification Trial', href: 'https://homecoming.wiki/wiki/Terra_Volta_Respecification_Trial' },
  ],
}
