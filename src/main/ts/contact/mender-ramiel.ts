import { ContactData } from 'coh-content-db'
import { Ouroboros } from '../zone/ouroboros'

export const MenderRamiel: ContactData = {
  key: 'mender-ramiel',
  name: 'Mender Ramiel',
  title: 'Incarnate Lore Master',
  location: { zoneKey: Ouroboros.key, coords: [452, 665, -883] },
  levelRange: [50],
  links: [{ title: 'Mender Ramiel', href: 'https://homecoming.wiki/wiki/Mender_Ramiel' }],
}
