import { ContactData } from 'coh-content-db'
import { PocketD } from '../zone/pocket-d'

export const ArbiterHawk: ContactData = {
  key: 'arbiter-hawk',
  name: 'Arbiter Hawk',
  title: 'Arachnos Arbiter',
  location: { zoneKey: PocketD.key, coords: [-198, 0, -898] },
  levelRange: [30, 50],
  notes: `Only available during Valentine's events.`,
  links: [{ title: 'Arbiter Hawk', href: 'https://homecoming.wiki/wiki/Arbiter_Hawk' }],
}
