import { ContactData } from 'coh-content-db'
import { IndependencePort } from '../zone/independence-port'

export const MsLiberty: ContactData = {
  key: 'ms-liberty',
  name: 'Ms. Liberty',
  title: 'Leader of the Vindicators',
  zoneKey: IndependencePort.key,
  loc: [-806, 1, -5643],
  levelRange: [45, 50],
  links: [{ title: 'Homecoming Wiki', href: 'https://homecoming.wiki/wiki/Ms._Liberty' }],
}
