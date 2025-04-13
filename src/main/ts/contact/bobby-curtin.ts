import { ContactData } from 'coh-content-db'
import { NervaArchipelago } from '../zone/nerva-archipelago'

export const BobbyCurtin: ContactData = {
  key: 'bobbdy-curtin',
  name: 'Bobby Curtin',
  title: 'Bouncer',
  morality: 'rogue',
  location: { zoneKey: NervaArchipelago.key, coords: [-75, 16.5, 6105] },
  levelRange: [25, 29],
  links: [{ title: 'Bobby Curtin', href: 'https://homecoming.wiki/wiki/Bobby_Curtin' }],
}
