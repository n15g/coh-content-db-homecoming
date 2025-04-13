import { ContactData } from 'coh-content-db'
import { Ouroboros } from '../zone/ouroboros'

export const Prometheus: ContactData = {
  key: 'prometheus',
  name: 'Prometheus',
  morality: 'primal',
  location: { zoneKey: Ouroboros.key, coords: [495, 672, -906] },
  levelRange: [50],
  links: [{ title: 'Prometheus', href: 'https://homecoming.wiki/wiki/Prometheus' }],
}
