import { MissionData } from 'coh-content-db'
import { JaneHallaway } from '../contact/jane-hallaway'

export const FirstTerraVoltaRespecificationTrial: MissionData = {
  key: 'first-terra-volta-respecification-trial',
  name: 'First Terra Volta Respecification Trial',
  type: 'trial',
  morality: 'heroic',
  contactKeys: JaneHallaway.key,
  levelRange: [24, 33],
  links: [
    { title: 'Terra Volta Respecification Trial', href: 'https://homecoming.wiki/wiki/Terra_Volta_Respecification_Trial' },
  ],
}
