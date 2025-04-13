import { ContactData } from 'coh-content-db'
import { TalosIsland } from '../zone/talos-island'

export const CainRoyce: ContactData = {
  key: 'cain-royce',
  name: 'Cain Royce',
  title: 'Philanthropist',
  morality: 'heroic',
  location: { zoneKey: TalosIsland.key, coords: [-660, 1600, 6960] },
  levelRange: [20, 24],
  links: [{ title: 'Cain Royce', href: 'https://homecoming.wiki/wiki/Cain_Royce' }],
}
