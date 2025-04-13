import { ContactData } from 'coh-content-db'
import { IndependencePort } from '../zone/independence-port'

export const AshwinLannister: ContactData = {
  key: 'ashwin-lannister',
  name: 'Ashwin Lannister',
  title: 'Hero Corps Representative',
  morality: 'heroic',
  location: { zoneKey: IndependencePort.key, coords: [-1587, -174, -5785] },
  levelRange: [25, 29],
  links: [{ title: 'Ashwin Lannister', href: 'https://homecoming.wiki/wiki/Ashwin_Lannister' }],
}
