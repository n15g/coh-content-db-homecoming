import { ContactData } from 'coh-content-db'
import { PeregrineIsland } from '../zone/peregrine-island'

export const MariaJenkins: ContactData = {
  key: 'maria-jenkins',
  name: 'Maria Jenkins',
  title: 'Former Heroine',
  morality: 'heroic',
  location: { zoneKey: PeregrineIsland.key, coords: [-1043, 0, -2783] },
  levelRange: [45, 50],
  links: [{ title: 'Maria Jenkins', href: 'https://homecoming.wiki/wiki/Maria_Jenkins' }],
}
