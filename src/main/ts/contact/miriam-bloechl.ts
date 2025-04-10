import { ContactData } from 'coh-content-db'
import { TalosIsland } from '../zone/talos-island'

export const MiriamBloechl: ContactData = {
  key: 'miriam-bloechl',
  name: 'Miriam Bloechl',
  title: 'Psychometrist',
  location: { zoneKey: TalosIsland.key, coords: [-909, 224, 6088] },
  levelRange: [25, 29],
  links: [{ title: 'Homecoming Wiki', href: 'https://homecoming.wiki/wiki/Miriam_Bloechl' }],
}
