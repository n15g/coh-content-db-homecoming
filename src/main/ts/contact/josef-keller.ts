import { ContactData } from 'coh-content-db'
import { TalosIsland } from '../zone/talos-island'

export const JosefKeller: ContactData = {
  key: 'josef-keller',
  name: 'Josef Keller',
  title: 'Professor of Folklore',
  zoneKey: TalosIsland.key,
  loc: [-80, 95, 9490],
  levelRange: [20, 24],
  links: [{ title: 'Homecoming Wiki', href: 'https://homecoming.wiki/wiki/Josef_Keller' }],
}
