import { ContactData } from 'coh-content-db'
import { NervaArchipelago } from '../zone/nerva-archipelago'

export const TechnicianNaylor: ContactData = {
  key: 'technician-naylor',
  name: 'Technician Naylor',
  title: 'Arachnos Portal Technician',
  location: { zoneKey: NervaArchipelago.key, coords: [2859, -103, 995] },
  levelRange: [35, 39],
  links: [{ title: 'Homecoming Wiki', href: 'https://homecoming.wiki/wiki/Technician_Naylor' }],
}
