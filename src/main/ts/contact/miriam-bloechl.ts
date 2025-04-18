import { ContactData } from 'coh-content-db'
import { TalosIsland } from '../zone/talos-island'

export const MiriamBloechl: ContactData = {
  key: 'miriam-bloechl',
  name: 'Miriam Bloechl',
  title: 'Psychometrist',
  morality: 'heroic',
  location: { zoneKey: TalosIsland.key, coords: [-909, 224, 6088] },
  levelRange: [25, 29],
  links: [{ title: 'Miriam Bloechl', href: 'https://homecoming.wiki/wiki/Miriam_Bloechl' }],
}
