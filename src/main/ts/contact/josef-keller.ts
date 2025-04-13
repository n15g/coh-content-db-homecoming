import { ContactData } from 'coh-content-db'
import { TalosIsland } from '../zone/talos-island'

export const JosefKeller: ContactData = {
  key: 'josef-keller',
  name: 'Josef Keller',
  title: 'Professor of Folklore',
  morality: 'heroic',
  location: { zoneKey: TalosIsland.key, coords: [-80, 95, 9490] },
  levelRange: [20, 24],
  links: [{ title: 'Josef Keller', href: 'https://homecoming.wiki/wiki/Josef_Keller' }],
}
