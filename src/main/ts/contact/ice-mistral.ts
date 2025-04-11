import { ContactData } from 'coh-content-db'
import { StMartial } from '../zone/st-martial'

export const IceMistral: ContactData = {
  key: 'ice-mistral',
  name: 'Ice Mistral',
  title: 'Strike Force Contact',
  location: { zoneKey: StMartial.key, coords: [-1756.5, -160, 2210] },
  levelRange: [35, 40],
  links: [{ title: 'Ice Mistral', href: 'https://homecoming.wiki/wiki/Ice_Mistral' }],
}
