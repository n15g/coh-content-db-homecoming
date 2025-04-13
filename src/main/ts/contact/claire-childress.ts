import { ContactData } from 'coh-content-db'
import { TalosIsland } from '../zone/talos-island'

export const ClaireChildress: ContactData = {
  key: 'claire-childress',
  name: 'Claire Childress',
  title: 'Medium',
  morality: 'heroic',
  location: { zoneKey: TalosIsland.key, coords: [-235, 95, 9140] },
  levelRange: [20, 24],
  links: [{ title: 'Claire Childress', href: 'https://homecoming.wiki/wiki/Claire_Childress' }],
}
