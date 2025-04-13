import { ContactData } from 'coh-content-db'
import { SteelCanyon } from '../zone/steel-canyon'

export const GuidanceCounselorJones: ContactData = {
  key: 'guidance-counselor-jones',
  name: 'Guidance Counselor Jones',
  title: 'University Guidance Counselor',
  morality: 'heroic',
  location: { zoneKey: SteelCanyon.key, coords: [-2931, -248, 2243] },
  levelRange: [10, 50],
  links: [{ title: 'Guidance Counselor Jones', href: 'https://homecoming.wiki/wiki/Guidance_Counselor_Jones' }],
}
