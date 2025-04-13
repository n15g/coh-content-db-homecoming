import { ContactData } from 'coh-content-db'
import { SkywayCity } from '../zone/skyway-city'

export const PavelGarnier: ContactData = {
  key: 'pavel-garnier',
  name: 'Pavel Garnier',
  morality: 'heroic',
  location: { zoneKey: SkywayCity.key, coords: [1551, -126, -1821.5] },
  levelRange: [15, 19],
  links: [{ title: 'Pavel Garnier', href: 'https://homecoming.wiki/wiki/Pavel_Garnier' }],
}
