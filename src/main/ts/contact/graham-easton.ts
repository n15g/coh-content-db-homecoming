import { ContactData } from 'coh-content-db'
import { SteelCanyon } from '../zone/steel-canyon'

export const GrahamEaston: ContactData = {
  key: 'graham-easton',
  name: 'Graham Easton',
  title: 'Museum Curator',
  morality: 'heroic',
  location: { zoneKey: SteelCanyon.key, coords: [-4606, 0, -980] },
  levelRange: [15, 24],
  links: [{ title: 'Graham Easton', href: 'https://homecoming.wiki/wiki/Graham_Easton' }],
}
