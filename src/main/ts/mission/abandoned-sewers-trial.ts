import { MissionData } from 'coh-content-db'
import { MairennMacGregor } from '../contact/mairenn-macgregor'

export const AbandonedSewersTrial: MissionData = {
  key: 'abandoned-sewers-trial',
  name: 'Abandoned Sewers Trial',
  type: 'trial',
  morality: 'heroic',
  contactKeys: MairennMacGregor.key,
  levelRange: [38],
  links: [
    { title: 'Abandoned Sewers Trial', href: 'https://homecoming.wiki/wiki/Abandoned_Sewers_Trial' },
  ],
}
