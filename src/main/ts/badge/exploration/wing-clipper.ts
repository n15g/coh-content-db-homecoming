import { BadgeData } from 'coh-content-db'
import { KallistiWharf } from '../../zone/kallisti-wharf'

export const WingClipper: BadgeData = {
  type: 'exploration',
  key: 'wing-clipper',
  gameId: 'MayhemMap10',
  setTitleId: [2602],
  name: 'Wing Clipper',
  releaseDate: '2026-10-06',
  morality: 'villainous',
  badgeText: `You recall the time you tore through Kallisti Wharf and remember how driven by violence you once used to be.`,
  notes: ` `,
  links: [
    { title: 'Wing Clipper Badge', href: 'https://homecoming.wiki/wiki/Wing_Clipper_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: KallistiWharf.key, coords: [5702, 121, 4697], icon: 'badge', iconText: '1' } },
  ],
}
