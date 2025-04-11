import { ContactData } from 'coh-content-db'
import { PeregrineIsland } from '../zone/peregrine-island'

export const TinaMacintyre: ContactData = {
  key: 'tina-macintyre',
  name: 'Tina Macintyre',
  title: 'Portal Corporation Research Scientist',
  location: { zoneKey: PeregrineIsland.key, coords: [-1680.5, 0, -3638.5] },
  levelRange: [40, 45],
  links: [{ title: 'Tina Macintyre', href: 'https://homecoming.wiki/wiki/Tina_Macintyre' }],
}
