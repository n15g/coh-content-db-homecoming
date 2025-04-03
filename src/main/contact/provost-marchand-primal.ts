import { ContactData } from 'coh-content-db'
import { Phone } from '../zone/phone'

export const ProvostMarchandPrimal: ContactData = {
  key: 'provost-marchand-primal',
  name: 'Provost Marchand (Primal)',
  title: 'Former Provost General of Praetoria',
  zoneKey: Phone.key,
  levelRange: [30, 50],
  links: [{ title: 'Homecoming Wiki', href: 'https://homecoming.wiki/wiki/Provost_Marchand_(Primal_Earth)' }],
}
