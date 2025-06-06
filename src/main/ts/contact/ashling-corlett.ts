import { ContactData } from 'coh-content-db'
import { SteelCanyon } from '../zone/steel-canyon'

export const AshlingCorlett: ContactData = {
  key: 'ashling-corlett',
  name: 'Ashling Corlett',
  title: 'Retired Hero Corps Field Analyst',
  morality: 'heroic',
  location: { zoneKey: SteelCanyon.key, coords: [-4736, 0, 395.4] },
  levelRange: [41, 49],
  links: [{ title: 'Ashling Corlett', href: 'https://homecoming.wiki/wiki/Ashling_Corlett' }],
}
