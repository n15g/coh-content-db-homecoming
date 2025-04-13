import { ContactData } from 'coh-content-db'
import { RiktiWarZone } from '../zone/rikti-war-zone'

export const TheLadyGrey: ContactData = {
  key: 'the-lady-grey',
  name: 'The Lady Grey',
  title: 'Leader of the Vanguard',
  morality: 'heroic',
  location: { zoneKey: RiktiWarZone.key, coords: [328, -1184, -2315.5] },
  levelRange: [45, 50],
  links: [{ title: 'The Lady Grey', href: 'https://homecoming.wiki/wiki/The_Lady_Grey' }],
}
