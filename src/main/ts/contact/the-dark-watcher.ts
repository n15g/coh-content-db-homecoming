import { ContactData } from 'coh-content-db'
import { RiktiWarZone } from '../zone/rikti-war-zone'

export const TheDarkWatcher: ContactData = {
  key: 'the-dark-watcher',
  name: 'The Dark Watcher',
  title: 'Mysterious Man in Black',
  morality: 'primal',
  location: { zoneKey: RiktiWarZone.key, coords: [282, -1175, -2113] },
  levelRange: [45, 50],
  links: [{ title: 'The Dark Watcher', href: 'https://homecoming.wiki/wiki/The_Dark_Watcher_(Primal_Earth)' }],
}
