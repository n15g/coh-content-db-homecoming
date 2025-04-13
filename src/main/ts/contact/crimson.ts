import { ContactData } from 'coh-content-db'
import { PeregrineIsland } from '../zone/peregrine-island'

export const Crimson: ContactData = {
  key: 'crimson',
  name: 'Crimson',
  title: 'Wetwork Agent',
  morality: 'heroic',
  location: { zoneKey: PeregrineIsland.key, coords: [2303, 5.5, -256] },
  levelRange: [45, 50],
  links: [{ title: 'Crimson', href: 'https://homecoming.wiki/wiki/Crimson' }],
}
