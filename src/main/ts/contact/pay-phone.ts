import { ContactData } from 'coh-content-db'
import { RiktiWarZone } from '../zone/rikti-war-zone'

export const PayPhone: ContactData = {
  key: 'pay-phone',
  name: 'Pay Phone',
  title: 'Outdated Tec',
  zoneKey: RiktiWarZone.key,
  loc: [3229.5, -0, -513],
  levelRange: [40, 50],
  links: [{ title: 'Homecoming Wiki', href: 'https://homecoming.wiki/wiki/Pay_Phone' }],
}
