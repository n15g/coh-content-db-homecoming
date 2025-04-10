import { ContactData } from 'coh-content-db'
import { IndependencePort } from '../zone/independence-port'

export const SisterPsyche: ContactData = {
  key: 'sister-psyche',
  name: 'Sister Psyche',
  title: 'Task Force Contact',
  location: { zoneKey: IndependencePort.key, coords: [-1636, 0, -5856] },
  levelRange: [20, 25],
  links: [{ title: 'Homecoming Wiki', href: 'https://homecoming.wiki/wiki/Sister_Psyche' }],
}
