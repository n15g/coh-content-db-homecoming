import { ContactData } from 'coh-content-db'
import { FirstWard } from '../zone/first-ward'

export const KatieDouglas: ContactData = {
  key: 'katie-douglas',
  name: 'Katie Douglas',
  title: 'Renegade Seer',
  morality: 'heroic',
  location: { zoneKey: FirstWard.key, coords: [355, 18, -1572] },
  levelRange: [20, 29],
  links: [{ title: 'Katie Douglas', href: 'https://homecoming.wiki/wiki/Katie_Douglas' }],
}
