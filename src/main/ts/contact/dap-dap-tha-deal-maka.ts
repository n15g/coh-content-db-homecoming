import { ContactData } from 'coh-content-db'
import { KallistiWharf } from '../zone/kallisti-wharf'

export const DapDapThaDealMaka: ContactData = {
  key: 'dap-dap-tha-deal-maka',
  name: 'Dap-Dap tha Deal-Maka',
  title: 'Freakshow',
  morality: 'villainous',
  location: { zoneKey: KallistiWharf.key, coords: [1578, 47, 4995] },
  levelRange: [1, 7],
  links: [{ title: 'Dap-Dap tha Deal-Maka', href: 'https://homecoming.wiki/wiki/Dap-Dap_tha_Deal-Maka' }],
}
