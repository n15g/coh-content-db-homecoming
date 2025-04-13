import { MissionData } from 'coh-content-db'
import { MajorRichardFlagg } from '../contact/major-richard-flagg'

export const ThirdTerraVoltaRespecificationTrial: MissionData = {
  key: 'third-terra-volta-respecification-trial',
  name: 'Third Terra Volta Respecification Trial',
  type: 'trial',
  morality: 'heroic',
  contactKeys: MajorRichardFlagg.key,
  levelRange: [44],
  links: [
    { title: 'Terra Volta Respecification Trial', href: 'https://homecoming.wiki/wiki/Terra_Volta_Respecification_Trial' },
  ],
}
