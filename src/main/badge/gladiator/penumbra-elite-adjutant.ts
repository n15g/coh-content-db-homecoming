import { BadgeData } from 'coh-content-db'
import { SuperSpy } from '../exploration/super-spy'

export const PenumbraEliteAdjutant: BadgeData = {
  type: 'gladiator',
  key: 'penumbra-elite-adjutant',
  setTitleId: [492],
  name: 'Penumbra Elite Adjutant',
  morality: 'heroic',
  badgeText: 'You\'ve beat down the Council and now they fear you.',
  links: [
    { title: 'Penumbra Elite Adjutant Badge', href: 'https://homecoming.wiki/wiki/Penumbra_Elite_Adjutant_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png',
  requirements: [
    { key: SuperSpy.key, type: 'badge', badgeKey: SuperSpy.key },
  ],
}
