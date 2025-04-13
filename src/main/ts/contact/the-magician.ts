import { ContactData } from 'coh-content-db'
import { NightWard } from '../zone/night-ward'

export const TheMagician: ContactData = {
  key: 'the-magician',
  name: 'The Magician',
  title: 'Sage of forbidden knowledge',
  morality: 'all',
  location: { zoneKey: NightWard.key, coords: [1935, 105, 1373] },
  levelRange: [30, 39],
  links: [{ title: 'The Magician', href: 'https://homecoming.wiki/wiki/The_Magician_(Contact)' }],
}
