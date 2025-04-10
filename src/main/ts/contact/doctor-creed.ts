import { ContactData } from 'coh-content-db'
import { MercyIsland } from '../zone/mercy-island'

export const DoctorCreed: ContactData = {
  key: 'doctor-creed',
  name: 'Doctor Creed',
  title: 'Mad Scientist',
  location: { zoneKey: MercyIsland.key, coords: [-1357, 239, -16] },
  levelRange: [3, 8],
  links: [{ title: 'Homecoming Wiki', href: 'https://homecoming.wiki/wiki/Doctor_Creed' }],
}
