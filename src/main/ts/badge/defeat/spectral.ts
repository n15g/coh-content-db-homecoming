import { BadgeData, zoneLink } from 'coh-content-db'
import { PortOakes } from '../../zone/port-oakes'

export const Spectral: BadgeData = {
  type: 'defeat',
  key: 'spectral',
  setTitleId: [249],
  name: 'Spectral',
  morality: 'villainous',
  badgeText: 'You have trapped many Spectral Pirates and they will not forget your treachery.',
  acquisition: `Trap 100 ghosts in Fort Hades, ${zoneLink(PortOakes)}.`,
  links: [
    { title: 'Spectral Badge', href: 'https://homecoming.wiki/wiki/Spectral_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/ghosts.png',
}
