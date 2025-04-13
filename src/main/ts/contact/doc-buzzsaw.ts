import { ContactData } from 'coh-content-db'
import { SharkheadIsle } from '../zone/sharkhead-isle'

export const DocBuzzsaw: ContactData = {
  key: 'doc-buzzsaw',
  name: 'Doc Buzzsaw',
  title: 'Freakshow Meat Doctor',
  morality: 'villainous',
  location: { zoneKey: SharkheadIsle.key, coords: [693.5, 32, -1324.5] },
  levelRange: [25, 39],
  links: [{ title: 'Doc Buzzsaw', href: 'https://homecoming.wiki/wiki/Doc_Buzzsaw' }],
}
