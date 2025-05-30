import { ContactData } from 'coh-content-db'
import { Brickstown } from '../zone/brickstown'

export const GordonStacy: ContactData = {
  key: 'gordon-stacyr',
  name: 'Gordon Stacy',
  morality: 'heroic',
  location: { zoneKey: Brickstown.key, coords: [-2200, 0, 2680.5] },
  levelRange: [35, 39],
  links: [{ title: 'Gordon Stacy', href: 'https://homecoming.wiki/wiki/Gordon_Stacy' }],
}
