import { ContactData } from 'coh-content-db'
import { CapAuDiable } from '../zone/cap-au-diable'

export const BrotherHammond: ContactData = {
  key: 'brother-hammond',
  name: 'Brother Hammond',
  title: 'Luddite Preacher',
  morality: 'villainous',
  location: { zoneKey: CapAuDiable.key, coords: [-245, 135, -780] },
  levelRange: [15, 24],
  links: [{ title: 'Brother Hammond', href: 'https://homecoming.wiki/wiki/Brother_Hammond' }],
}
