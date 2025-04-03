import { ContactData } from 'coh-content-db'
import { Grandville } from '../zone/grandville'

export const DrForrester: ContactData = {
  key: 'dr-forrester',
  name: 'Dr. Forrester',
  title: 'Mad Scientist',
  zoneKey: Grandville.key,
  loc: [2920, -344, 1167],
  levelRange: [40, 44],
  links: [{ title: 'Homecoming Wiki', href: 'https://homecoming.wiki/wiki/Dr._Forrester' }],
}
