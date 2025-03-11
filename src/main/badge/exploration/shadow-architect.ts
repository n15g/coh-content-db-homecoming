import { BadgeData } from 'coh-content-db'
import { FirebaseZulu } from '../../map/firebase-zulu'

export const ShadowArchitect: BadgeData = {
  type: 'EXPLORATION',
  key: 'shadow-architect',
  setTitle: { id: 1801 },
  name: [{ value: 'Shadow Architect' }],
  alignment: ['H'],
  mapKey: FirebaseZulu.key,
  loc: [513, 1742, -2084],
  badgeText: [{
    value: 'Humanity is a creature who builds. It finds virgin territory and makes its mark.'
      + ' The Shadow Shard is no different.'
      + ' Even in the short time since it was discovered, a flood of construction material made its way through the dimensional membrane into the Shadow Shard and the building began.'
      + ' The crews met the unearthly challenges that faced them and established numerous military facilities in this strange territory.'
      + ' There is something almost surreal about seeing this construction crane, something so commonplace on Earth here in an alien dimension: the mundane meeting the unearthly.',
  }],
  notes: 'Located in [map:firebase-zulu] 181 yards NNW of the Point Foxtrot marker, on top of the west end of the arm on top of the crane.',
  links: [
    { title: 'Shadow Architect Badge', href: 'https://homecoming.wiki/wiki/Shadow Architect_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png' }],
  vidiotMapKey: '5',
}
