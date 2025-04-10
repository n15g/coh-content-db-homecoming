import { ContactData } from 'coh-content-db'
import { AtlasPark } from '../zone/atlas-park'

export const SondraCostel: ContactData = {
  key: 'sondra-costel',
  name: 'Sondra Costel',
  title: 'Cygnus Medical Center Director',
  location: { zoneKey: AtlasPark.key, coords: [-1126, 0, -1152] },
  levelRange: [1, 7],
  links: [{ title: 'Homecoming Wiki', href: 'https://homecoming.wiki/wiki/Sondra_Costel' }],
}
