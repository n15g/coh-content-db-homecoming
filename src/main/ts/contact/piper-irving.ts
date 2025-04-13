import { ContactData } from 'coh-content-db'
import { TalosIsland } from '../zone/talos-island'

export const PiperIrving: ContactData = {
  key: 'piper-irving',
  name: 'Piper Irving',
  title: 'Anthropologist',
  morality: 'heroic',
  location: { zoneKey: TalosIsland.key, coords: [-1386, 160, 6829] },
  levelRange: [20, 24],
  links: [{ title: 'Piper Irving', href: 'https://homecoming.wiki/wiki/Piper_Irving' }],
}
