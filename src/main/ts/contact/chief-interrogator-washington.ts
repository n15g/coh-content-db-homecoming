import { ContactData } from 'coh-content-db'
import { NovaPraetoria } from '../zone/nova-praetoria'

export const ChiefInterrogatorWashington: ContactData = {
  key: 'chief-interrogator-washington',
  name: 'Chief Interrogator Washington',
  title: 'Chief Interrogator for the Ministry of Intelligence',
  location: { zoneKey: NovaPraetoria.key, coords: [-5194, 47, 296] },
  levelRange: [1, 10],
  links: [{ title: 'Homecoming Wiki', href: 'https://homecoming.wiki/wiki/Chief_Interrogator_Washington' }],
}
