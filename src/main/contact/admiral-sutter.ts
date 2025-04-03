import { ContactData } from 'coh-content-db'
import { IndependencePort } from '../zone/independence-port'

export const AdmiralSutter: ContactData = {
  key: 'admiral-sutter',
  name: 'Admiral Sutter',
  title: 'Rear Admiral, United States Navy',
  zoneKey: IndependencePort.key,
  loc: [-1391.5, -20.2, -6062],
  levelRange: [20, 40],
  links: [{ title: 'Homecoming Wiki', href: 'https://homecoming.wiki/wiki/Admiral_Sutter' }],
}
