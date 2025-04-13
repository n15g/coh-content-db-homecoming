import { ContactData } from 'coh-content-db'
import { AtlasPark } from '../zone/atlas-park'

export const CityRepresentative: ContactData = {
  key: 'city-representative',
  name: 'City Representative',
  title: 'Brighid Moreira',
  morality: 'heroic',
  location: { zoneKey: AtlasPark.key, coords: [129, -768, -640] },
  levelRange: [20, 50],
  links: [{ title: 'City Representative', href: 'https://homecoming.wiki/wiki/City_Representative' }],
}
