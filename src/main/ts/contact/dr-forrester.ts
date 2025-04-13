import { ContactData } from 'coh-content-db'
import { Grandville } from '../zone/grandville'

export const DrForrester: ContactData = {
  key: 'dr-forrester',
  name: 'Dr. Forrester',
  title: 'Mad Scientist',
  morality: 'villainous',
  location: { zoneKey: Grandville.key, coords: [2920, -344, 1167] },
  levelRange: [40, 44],
  links: [{ title: 'Dr. Forrester', href: 'https://homecoming.wiki/wiki/Dr._Forrester' }],
}
