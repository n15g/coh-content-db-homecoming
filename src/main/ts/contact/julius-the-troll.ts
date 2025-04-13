import { ContactData } from 'coh-content-db'
import { TheHollows } from '../zone/the-hollows'

export const JuliusTheTroll: ContactData = {
  key: 'julius-the-troll',
  name: 'Julius the Troll',
  title: 'Disgruntled Troll',
  morality: 'heroic',
  location: { zoneKey: TheHollows.key, coords: [505, 0, 448.5] },
  levelRange: [10, 14],
  links: [{ title: 'Julius the Troll', href: 'https://homecoming.wiki/wiki/Aaron_Walker' }],
}
