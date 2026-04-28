import { ContactData } from 'coh-content-db'
import { Ouroboros } from '../zone/ouroboros'

export const Luna: ContactData = {
  key: 'luna',
  name: 'Luna',
  title: 'Incarnate Merit Vendor',
  morality: 'all',
  location: { zoneKey: Ouroboros.key, coords: [517, 672, -869] },
  levelRange: 1,
  links: [{ title: 'Luna', href: 'https://homecoming.wiki/wiki/Luna' }],
}
