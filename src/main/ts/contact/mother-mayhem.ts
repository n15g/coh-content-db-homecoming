import { ContactData } from 'coh-content-db'
import { Neutropolis } from '../zone/neutropolis'

export const MotherMayhem: ContactData = {
  key: 'mother-mayhem',
  name: 'Mother Mayhem',
  title: 'Praetor and Asylum Warden',
  zoneKey: Neutropolis.key,
  levelRange: [14, 20],
  notes: 'Mother Mayhem, as Praetor Tilman, does not actually deign to show herself in-zone. Instead, characters can call her directly.',
  links: [{ title: 'Mother Mayhem', href: 'https://homecoming.wiki/wiki/Mother_Mayhem' }],
}
