import { ContactData } from 'coh-content-db'
import { SteelCanyon } from '../zone/steel-canyon'

export const HugoRedding: ContactData = {
  key: 'hugo-redding',
  name: 'Hugo Redding',
  title: `Physician's Assistant}`,
  morality: 'heroic',
  location: { zoneKey: SteelCanyon.key, coords: [-2407, 0, 2523.5] },
  levelRange: [9, 14],
  links: [{ title: 'Hugo Redding', href: 'https://homecoming.wiki/wiki/Hugo_Redding' }],
}
