import { ContactData } from 'coh-content-db'
import { ImperialCity } from '../zone/imperial-city'

export const TamiBaker: ContactData = {
  key: 'tami-baker',
  name: 'Tami Baker',
  title: 'Secretary',
  location: { zoneKey: ImperialCity.key, coords: [-764, -46, -985] },
  levelRange: [8, 15],
  links: [{ title: 'Homecoming Wiki', href: 'https://homecoming.wiki/wiki/Tami_Baker' }],
}
