import { BadgeData } from 'coh-content-db'
import { KallistiWharf } from '../../zone/kallisti-warf'

export const ProtestTooMuch: BadgeData = {
  type: 'exploration',
  key: 'quay-to-the-city',
  setTitleId: [2455],
  name: 'Quay to the City',
  releaseDate: '2025-06-??',
  morality: 'all',
  badgeText: `Kallisti Marina is all that is left of a larger harbor that originally gave Kallisti Wharf half of its name. The first half, Kallisti, is a greek word that means 'The prettiest one'. Back when it gained the moniker, there were many Greek immigrants to the area, and it was noted for its placid, beautiful waters, bright blue, full of fish and free of the pollution that would come later. Before Independence Port, this Marina was the first port of call for imports and immigrants alike`,
  notes: ` ??? `,
  links: [
    { title: 'Quay to the City Badge', href: 'https://homecoming.wiki/wiki/Quay_To_The_City_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: KallistiWharf.key, coords: [2143.5, 12.4, -547.1], icon: 'badge', iconText: '7' } },
  ],
}
