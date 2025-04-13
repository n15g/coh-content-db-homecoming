import { ContactData } from 'coh-content-db'
import { TheHollows } from '../zone/the-hollows'

export const TalshakTheMystic: ContactData = {
  key: 'talshak-the-mystic',
  name: 'Talshak the Mystic',
  title: 'Hacker',
  morality: 'heroic',
  location: { zoneKey: TheHollows.key, coords: [388, -234, -1157] },
  levelRange: [12, 14],
  links: [{ title: 'Talshak the Mystic', href: 'https://homecoming.wiki/wiki/Talshak_the_Mystic' }],
}
