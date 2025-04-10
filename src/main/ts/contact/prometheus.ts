import { ContactData } from 'coh-content-db'
import { Ouroboros } from '../zone/ouroboros'

export const Prometheus: ContactData = {
  key: 'prometheus',
  name: 'Prometheus',
  location: { zoneKey: Ouroboros.key, coords: [495, 672, -906] },
  levelRange: [50],
  links: [{ title: 'Homecoming Wiki', href: 'https://homecoming.wiki/wiki/Prometheus' }],
}
