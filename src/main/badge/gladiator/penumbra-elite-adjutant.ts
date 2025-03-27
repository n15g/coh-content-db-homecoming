import { BadgeData, badgeLink } from 'coh-content-db'
import { SuperSpy } from '../exploration/super-spy'

export const PenumbraEliteAdjutant: BadgeData = {
  type: 'GLADIATOR',
  key: 'penumbra-elite-adjutant',
  setTitle: { id: 492 },
  name: [
    { value: 'Penumbra Elite Adjutant' },
  ],
  alignment: ['H'],
  badgeText: [
    { value: 'You\'ve beat down the Council and now they fear you.' },
  ],
  acquisition: `Earn the ${badgeLink(SuperSpy)} Badge (Council)`,
  links: [
    { title: 'Penumbra Elite Adjutant Badge', href: 'https://homecoming.wiki/wiki/Penumbra_Elite_Adjutant_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png' },
  ],
}
