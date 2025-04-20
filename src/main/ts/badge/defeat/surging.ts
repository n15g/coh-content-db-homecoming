import { BadgeData, zoneLink } from 'coh-content-db'
import { CapAuDiable } from '../../zone/cap-au-diable'

export const Surging: BadgeData = {
  type: 'defeat',
  key: 'surging',
  setTitleId: [519],
  name: 'Surging',
  releaseDate: '2012-11-30',
  morality: 'villainous',
  badgeText: 'You have helped defeat Deathsurge.',
  acquisition: `Defeat Deathsurge, a monster that spawns in ${zoneLink(CapAuDiable)}.`,
  links: [
    { title: 'Surging Badge', href: 'https://homecoming.wiki/wiki/Surging_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/surging.png',
}
