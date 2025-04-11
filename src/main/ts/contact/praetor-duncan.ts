import { ContactData } from 'coh-content-db'
import { Phone } from '../zone/phone'

export const PraetorDuncan: ContactData = {
  key: 'praetor-duncan',
  name: 'Praetor Duncan',
  title: 'Praetor Duncan',
  location: { zoneKey: Phone.key },
  levelRange: [50],
  links: [{ title: 'Praetor Duncan', href: 'https://homecoming.wiki/wiki/Praetor_Duncan' }],
}
