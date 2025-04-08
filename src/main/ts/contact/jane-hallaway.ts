import { ContactData } from 'coh-content-db'
import { IndependencePort } from '../zone/independence-port'

export const JaneHallaway: ContactData = {
  key: 'jane-hallaway',
  name: 'Jane Hallaway',
  title: 'Respecification Trial Contact',
  zoneKey: IndependencePort.key,
  loc: [979.5, 64, -4711.5],
  levelRange: [24, 33],
  links: [{ title: 'Homecoming Wiki', href: 'https://homecoming.wiki/wiki/Jane_Hallaway' }],
}
