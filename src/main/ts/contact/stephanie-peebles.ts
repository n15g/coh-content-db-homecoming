import { ContactData } from 'coh-content-db'
import { StrigaIsle } from '../zone/striga-isle'

export const StephaniePeebles: ContactData = {
  key: 'stephanie-peebles',
  name: 'Stephanie Peebles',
  title: 'Tavern Owner',
  morality: 'heroic',
  location: { zoneKey: StrigaIsle.key, coords: [-245, 0, 45] },
  levelRange: [20, 24],
  links: [{ title: 'Stephanie Peebles', href: 'https://homecoming.wiki/wiki/Stephanie_Peebles' }],
}
