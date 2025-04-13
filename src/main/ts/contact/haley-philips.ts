import { ContactData } from 'coh-content-db'
import { SkywayCity } from '../zone/skyway-city'

export const HaleyPhilips: ContactData = {
  key: 'haley-philips',
  name: 'Haley Philips',
  morality: 'heroic',
  location: { zoneKey: SkywayCity.key, coords: [592, 0, -7592] },
  levelRange: [9, 14],
  links: [{ title: 'Haley Philips', href: 'https://homecoming.wiki/wiki/Haley_Philips' }],
}
