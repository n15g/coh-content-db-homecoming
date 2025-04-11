import { ContactData } from 'coh-content-db'
import { NovaPraetoria } from '../zone/nova-praetoria'

export const DoctorArvin: ContactData = {
  key: 'doctor-arvin',
  name: 'Doctor Arvin',
  title: 'Physician and Genetics Researcher at Cole Memorial Hospital',
  location: { zoneKey: NovaPraetoria.key, coords: [-4770, 6, -1558] },
  levelRange: [1, 10],
  links: [{ title: 'Doctor Arvin', href: 'https://homecoming.wiki/wiki/Doctor_Arvin' }],
}
