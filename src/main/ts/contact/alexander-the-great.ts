import { ContactData } from 'coh-content-db'
import { KallistiWharf } from '../zone/kallisti-wharf'

export const AlexanderTheGreat: ContactData = {
  key: 'alexander-the-great',
  name: 'Alexander the Great',
  title: 'Ex-Warrior',
  morality: 'rogue',
  location: { zoneKey: KallistiWharf.key, coords: [2147.2, 11.9, -423.5] },
  levelRange: [40, 50],
  links: [{ title: 'Alexander the Great', href: 'https://homecoming.wiki/wiki/Alexander_the_Great' }],
}
