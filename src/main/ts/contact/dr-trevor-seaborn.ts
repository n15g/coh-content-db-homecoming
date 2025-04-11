import { ContactData } from 'coh-content-db'
import { SteelCanyon } from '../zone/steel-canyon'

export const DrTrevorSeaborn: ContactData = {
  key: 'dr-trevor-seaborn',
  name: 'Dr. Trevor Seaborn',
  title: 'Abnormal Psychiatrist',
  location: { zoneKey: SteelCanyon.key, coords: [-1611.5, 0, 1378] },
  levelRange: [9, 14],
  links: [{ title: 'Dr. Trevor Seaborn', href: 'https://homecoming.wiki/wiki/Dr._Trevor_Seaborn' }],
}
