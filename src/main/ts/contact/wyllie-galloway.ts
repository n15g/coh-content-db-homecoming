import { ContactData } from 'coh-content-db'
import { KallistiWharf } from '../zone/kallisti-wharf'

export const WyllieGalloway: ContactData = {
  key: 'wyllie-galloway',
  name: 'Wyllie Galloway',
  title: 'Mystic Librarian',
  morality: 'heroic',
  location: { zoneKey: KallistiWharf.key, coords: [3564, 84, 3295] },
  levelRange: [40, 50],
  links: [{ title: 'Wyllie Galloway', href: 'https://homecoming.wiki/wiki/Wyllie_Galloway' }],

}
