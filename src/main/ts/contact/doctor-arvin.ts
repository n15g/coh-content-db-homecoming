import { ContactData } from 'coh-content-db'
import { NovaPraetoria } from '../zone/nova-praetoria'

export const DoctorArvin: ContactData = {
  key: 'doctor-arvin',
  name: 'Doctor Arvin',
  title: 'Physician and Genetics Researcher at Cole Memorial Hospital',
  zoneKey: NovaPraetoria.key,
  loc: [-4770, 6, -1558],
  levelRange: [1, 10],
  links: [{ title: 'Homecoming Wiki', href: 'https://homecoming.wiki/wiki/Doctor_Arvin' }],
}
