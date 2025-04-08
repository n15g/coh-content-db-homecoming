import { BadgeData } from 'coh-content-db'
import { FirebaseZulu } from '../../zone/firebase-zulu'

export const ShadowArchitect: BadgeData = {
  type: 'exploration',
  key: 'shadow-architect',
  setTitleId: [1801],
  name: 'Shadow Architect',
  morality: 'paragon-city-access',
  badgeText: `Humanity is a creature who builds. It finds virgin territory and makes its mark. The Shadow Shard is no different.
Even in the short time since it was discovered, a flood of construction material made its way through the dimensional membrane into the Shadow Shard and the building began.
The crews met the unearthly challenges that faced them and established numerous military facilities in this strange territory.
There is something almost surreal about seeing this construction crane, something so commonplace on Earth here in an alien dimension: the mundane meeting the unearthly.`,
  notes: `Located 181 yards NNW of the Point Foxtrot marker, on top of the west end of the arm on top of the crane.`,
  links: [
    { title: 'Shadow Architect Badge', href: 'https://homecoming.wiki/wiki/Shadow_Architect_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: FirebaseZulu.key, coords: [513, 1742, -2084] }, vidiotMapKey: '5' },
  ],
}
