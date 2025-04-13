import { ContactData } from 'coh-content-db'
import { Ouroboros } from '../zone/ouroboros'

export const PillarOfIceAndFlame: ContactData = {
  key: 'pillar-of-ice-and-flame',
  name: 'Pillar of Ice and Flame',
  morality: 'all',
  location: { zoneKey: Ouroboros.key },
  levelRange: [15],
  links: [{ title: 'Pillar of Ice and Flame', href: 'https://homecoming.wiki/wiki/Pillar_of_Ice_and_Flame' }],
}
