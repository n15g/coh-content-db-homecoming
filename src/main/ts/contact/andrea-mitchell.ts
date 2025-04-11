import { ContactData } from 'coh-content-db'
import { TalosIsland } from '../zone/talos-island'

export const AndreaMitchell: ContactData = {
  key: 'andrea-mitchell',
  name: 'Andrea Mitchell',
  title: 'Private Security Consultant',
  location: { zoneKey: TalosIsland.key, coords: [640, 30, 6280] },
  levelRange: [20, 24],
  links: [{ title: 'Andrea Mitchell', href: 'https://homecoming.wiki/wiki/Andrea_Mitchell' }],
}
