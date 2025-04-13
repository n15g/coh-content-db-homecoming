import { ContactData } from 'coh-content-db'
import { IndependencePort } from '../zone/independence-port'

export const LauraBrunetti: ContactData = {
  key: 'laura-brunetti',
  name: 'Laura Brunetti',
  title: 'Historian',
  morality: 'heroic',
  location: { zoneKey: IndependencePort.key, coords: [-1808, 0, -5234] },
  levelRange: [25, 29],
  links: [{ title: 'Laura Brunetti', href: 'https://homecoming.wiki/wiki/Laura_Brunetti' }],
}
