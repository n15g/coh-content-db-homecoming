import { ContactData } from 'coh-content-db'
import { SkywayCity } from '../zone/skyway-city'

export const JulianaNehring: ContactData = {
  key: 'juliana-nehring',
  name: 'Juliana Nehring',
  morality: 'heroic',
  location: { zoneKey: SkywayCity.key, coords: [651, 35.5, -7447] },
  levelRange: [15, 19],
  links: [{ title: 'Juliana Nehring', href: 'https://homecoming.wiki/wiki/Juliana_Nehring' }],
}
