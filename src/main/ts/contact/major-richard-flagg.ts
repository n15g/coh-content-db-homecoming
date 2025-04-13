import { ContactData } from 'coh-content-db'
import { PeregrineIsland } from '../zone/peregrine-island'

export const MajorRichardFlagg: ContactData = {
  key: 'major-richard-flagg',
  name: 'Major Richard Flagg',
  title: 'Respecification Trial Contact',
  morality: 'heroic',
  location: { zoneKey: PeregrineIsland.key, coords: [-1623, 0, -3602] },
  levelRange: [44, 50],
  links: [{ title: 'Major Richard Flagg', href: 'https://homecoming.wiki/wiki/Major_Richard_Flagg' }],
}
