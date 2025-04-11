import { ContactData } from 'coh-content-db'
import { Neutropolis } from '../zone/neutropolis'

export const DarkWatcher: ContactData = {
  key: 'dark-watcher',
  name: 'Dark Watcher',
  title: 'Mysterious Man in Black',
  zoneKey: Neutropolis.key,
  levelRange: [14, 20],
  links: [{ title: 'Dark Watcher', href: 'https://homecoming.wiki/wiki/Dark_Watcher_(Praetorian)' }],
}
