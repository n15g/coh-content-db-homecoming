import { BadgeData, zoneLink } from 'coh-content-db'
import { Warburg } from '../../zone/warburg'

export const TunnelRat: BadgeData = {
  type: 'EXPLORATION',
  key: 'tunnel-rat',
  setTitle: { id: 292 },
  name: [{ value: 'Tunnel Rat' }],
  alignment: ['H', 'V', 'P'],
  zoneKey: Warburg.key,
  loc: [-1219, 0, 143],
  badgeText: [{ value: 'The various tunnels throughout the WEB are a nasty piece of work.' }],
  notes: `The Tunnel Rat badge is in ${zoneLink(Warburg)}, located in the far eastern entrance of the WEB underground missile plant (the entrance/exit of chamber three).`,
  links: [{ title: 'Tunnel Rat Badge', href: 'https://homecoming.wiki/wiki/Tunnel_Rat_Badge' }],
  icon: [
    { alignment: 'H', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' },
    { alignment: 'V', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png' },
  ],
  vidiotMapKey: '2',
}
