import { ContactData } from 'coh-content-db'
import { Grandville } from '../zone/grandville'

export const InsideInformation: ContactData = {
  key: 'inside-information',
  name: 'Inside Information',
  morality: 'villainous',
  location: { zoneKey: Grandville.key },
  levelRange: [30, 50],
  links: [{ title: 'Inside Information', href: 'https://homecoming.wiki/wiki/Inside_Information' }],
}
