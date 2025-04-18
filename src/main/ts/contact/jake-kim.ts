import { ContactData } from 'coh-content-db'
import { IndependencePort } from '../zone/independence-port'

export const JakeKim: ContactData = {
  key: 'jake-kim',
  name: 'Jake Kim',
  title: 'Weapons Proliferation Expert',
  morality: 'heroic',
  location: { zoneKey: IndependencePort.key, coords: [-2184, 0, -1268] },
  levelRange: [20, 24],
  links: [{ title: 'Jake Kim', href: 'https://homecoming.wiki/wiki/Jake_Kim' }],
}
