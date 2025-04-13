import { ContactData } from 'coh-content-db'
import { PortOakes } from '../zone/port-oakes'

export const AngeloVendetti: ContactData = {
  key: 'angelo-vendetti',
  name: 'Angelo Vendetti',
  title: 'Vengeful Fixer',
  morality: 'villainous',
  location: { zoneKey: PortOakes.key, coords: [-423, 144, 1304] },
  levelRange: [5, 10],
  links: [{ title: 'Angelo Vendetti', href: 'https://homecoming.wiki/wiki/Angelo_Vendetti' }],
}
