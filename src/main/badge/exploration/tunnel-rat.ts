import { BadgeData, zoneLink } from 'coh-content-db'
import { Warburg } from '../../zone/warburg'

export const TunnelRat: BadgeData = {
  type: 'exploration',
  key: 'tunnel-rat',
  setTitleId: [292],
  name: 'Tunnel Rat',
  morality: 'all',
  zoneKey: Warburg.key,
  loc: [-1219, 0, 143],
  badgeText: 'The various tunnels throughout the WEB are a nasty piece of work.',
  notes: `The Tunnel Rat badge is in ${zoneLink(Warburg)}, located in the far eastern entrance of the WEB underground missile plant (the entrance/exit of chamber three).`,
  links: [{ title: 'Tunnel Rat Badge', href: 'https://homecoming.wiki/wiki/Tunnel_Rat_Badge' }],
  icon: [
    { alignment: 'hero', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' },
    { alignment: 'villain', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png' },
  ],
  vidiotMapKey: '2',
}
