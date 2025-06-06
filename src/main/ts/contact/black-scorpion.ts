import { ContactData } from 'coh-content-db'
import { Grandville } from '../zone/grandville'

export const BlackScorpion: ContactData = {
  key: 'black-scorpion',
  name: 'Black Scorpion',
  title: 'Arachnos Patron',
  morality: 'villainous',
  location: { zoneKey: Grandville.key, coords: [2694, -58.9, 903] },
  levelRange: [40, 50],
  links: [{ title: 'Black Scorpion', href: 'https://homecoming.wiki/wiki/Black_Scorpion' }],
}
