import { ContactData } from 'coh-content-db'
import { MercyIsland } from '../zone/mercy-island'

export const DoctorWeber: ContactData = {
  key: 'doctor-weber',
  name: 'Doctor Weber',
  title: 'Villain',
  location: { zoneKey: MercyIsland.key, coords: [-1037, 239, 525] },
  levelRange: [1, 7],
  links: [{ title: 'Homecoming Wiki', href: 'https://homecoming.wiki/wiki/Doctor_Weber' }],
}
