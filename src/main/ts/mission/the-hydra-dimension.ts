import { MissionData } from 'coh-content-db'
import { TinaMacintyre } from '../contact/tina-macintyre'

export const TheHydraDimension: MissionData = {
  key: 'the-hydra-dimension',
  name: 'The Hydra Dimension',
  type: 'mission',
  morality: 'heroic',
  contactKeys: TinaMacintyre.key,
  levelRange: [45, 50],
  links: [
    { title: 'The Hydra Dimension', href: 'https://homecoming.wiki/wiki/Tina_Macintyre#The_Hydra_Dimension_(40-45)' },
  ],
}
