import { ContactData } from 'coh-content-db'
import { CapAuDiable } from '../zone/cap-au-diable'

export const DrShellyPercey: ContactData = {
  key: 'dr-shelly-percey',
  name: 'Dr. Shelly Percey',
  title: 'Doctor',
  location: { zoneKey: CapAuDiable.key, coords: [-721, 0, 1195] },
  levelRange: [10, 14],
  links: [{ title: 'Dr. Shelly Percey', href: 'https://homecoming.wiki/wiki/Dr._Shelly_Percey' }],
}
