import { ContactData } from 'coh-content-db'
import { TalosIsland } from '../zone/talos-island'

export const CainRoyce: ContactData = {
  key: 'cain-royce',
  name: 'Cain Royce',
  title: 'Philanthropist',
  zoneKey: TalosIsland.key,
  loc: [-660, 1600, 6960],
  levelRange: [20, 24],
  links: [{ title: 'Homecoming Wiki', href: 'https://homecoming.wiki/wiki/Cain_Royce' }],
}
