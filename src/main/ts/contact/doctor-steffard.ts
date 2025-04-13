import { ContactData } from 'coh-content-db'
import { ImperialCity } from '../zone/imperial-city'

export const DoctorSteffard: ContactData = {
  key: 'doctor-steffard',
  name: 'Doctor Steffard',
  title: 'Neurologist and Cybernetics Expert',
  morality: 'resistance',
  location: { zoneKey: ImperialCity.key, coords: [-1789, -8, 929] },
  levelRange: [8, 15],
  links: [{ title: 'Doctor Steffard', href: 'https://homecoming.wiki/wiki/Doctor_Steffard' }],
}
