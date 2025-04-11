import { ContactData } from 'coh-content-db'
import { AtlasPark } from '../zone/atlas-park'

export const OfficerFields: ContactData = {
  key: 'officer-fields',
  name: 'Officer Fields',
  title: 'PPD Officer',
  location: { zoneKey: AtlasPark.key, coords: [919, 42, -2172] },
  levelRange: [1, 7],
  links: [{ title: 'Officer Fields', href: 'https://homecoming.wiki/wiki/Officer_Fields' }],
}
