import { BadgeData } from 'coh-content-db'
import { Warburg } from '../../zone/warburg'

export const TunnelRat: BadgeData = {
  type: 'exploration',
  key: 'tunnel-rat',
  setTitleId: [292],
  name: 'Tunnel Rat',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: 'The various tunnels throughout the WEB are a nasty piece of work.',
  notes: `Located in the far eastern entrance of the WEB underground missile plant (the entrance/exit of chamber three).`,
  links: [{ title: 'Tunnel Rat Badge', href: 'https://homecoming.wiki/wiki/Tunnel_Rat_Badge' }],
  icon: [
    { alignment: 'hero', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' },
    { alignment: 'villain', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png' },
  ],
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: Warburg.key, coords: [-1219, 0, 143], icon: 'badge', iconText: '2' } },
  ],
}
