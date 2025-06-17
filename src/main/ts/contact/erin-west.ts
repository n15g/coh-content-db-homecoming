import { ContactData } from 'coh-content-db'
import { KallistiWharf } from '../zone/kallisti-wharf'

export const ErinWest: ContactData = {
  key: 'erin-west',
  name: 'Erin West',
  title: 'Public Relations Specialist',
  morality: 'rogue',
  location: { zoneKey: KallistiWharf.key, coords: [7213, 55, 2649] },
  levelRange: [40, 50],
  links: [{ title: 'Erin West', href: 'https://homecoming.wiki/wiki/Erin_West' }],
}
