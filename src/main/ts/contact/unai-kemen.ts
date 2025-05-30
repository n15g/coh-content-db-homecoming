import { ContactData } from 'coh-content-db'
import { PeregrineIsland } from '../zone/peregrine-island'

export const UnaiKemen: ContactData = {
  key: 'unai-kemen',
  name: 'Unai Kemen',
  title: 'Portal Corp Security Chief',
  morality: 'heroic',
  location: { zoneKey: PeregrineIsland.key, coords: [-1519.5, 0.5, -3425] },
  levelRange: [45, 50],
  links: [{ title: 'Unai Kemen', href: 'https://homecoming.wiki/wiki/Unai_Kemen' }],
}
