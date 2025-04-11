import { ContactData } from 'coh-content-db'
import { NightWard } from '../zone/night-ward'

export const SirBedwyr: ContactData = {
  key: 'sir-bedwyr',
  name: 'Sir Bedwyr',
  title: 'Questing Knight',
  location: { zoneKey: NightWard.key, coords: [-2014, 44, -2432] },
  levelRange: [30, 39],
  links: [{ title: 'Sir Bedwyr', href: 'https://homecoming.wiki/wiki/Sir_Bedwyr' }],
}
