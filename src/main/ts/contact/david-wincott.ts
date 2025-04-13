import { ContactData } from 'coh-content-db'
import { TheHollows } from '../zone/the-hollows'

export const DavidWincott: ContactData = {
  key: 'david-wincott',
  name: 'David Wincott',
  title: 'Policeman',
  morality: 'heroic',
  location: { zoneKey: TheHollows.key, coords: [2410, 0, -3834] },
  levelRange: [14, 20],
  links: [{ title: 'David Wincott', href: 'https://homecoming.wiki/wiki/David_Wincott' }],
}
