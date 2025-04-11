import { ContactData } from 'coh-content-db'
import { RiktiWarZone } from '../zone/rikti-war-zone'

export const SerpentDrummer: ContactData = {
  key: 'serpent-drummer',
  name: 'Serpent Drummer',
  title: 'Leader of the Vanguard Gauntlet',
  location: { zoneKey: RiktiWarZone.key, coords: [210, -1192, -2425] },
  levelRange: [40, 50],
  links: [{ title: 'Serpent Drummer', href: 'https://homecoming.wiki/wiki/Serpent_Drummer' }],
}
