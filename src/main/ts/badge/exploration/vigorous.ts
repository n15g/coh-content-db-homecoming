import { BadgeData, zoneLink } from 'coh-content-db'
import { IndependencePort } from '../../zone/independence-port'
import { KingsRow } from '../../zone/kings-row'

export const Vigorous: BadgeData = {
  type: 'exploration',
  key: 'vigorous',
  setTitleId: [124],
  name: 'Vigorous',
  morality: 'paragon-city-access',
  badgeText: `Sister Psyche's greatest nemesis was the insane Malaise.
When she finally apprehended him, she found a confused soul in search of release.
Using her mental powers, she switched Malaise's dual personalities, bringing the benevolent one to dominance.
Then she took him under her wing for observation.`,
  notes: `Located in the Crey Cove neighborhood, in the center of the roof of a large warehouse approx. 310 yards southwest of the ${zoneLink(KingsRow)} tunnel and directly 187 yards south of Icon.`,
  links: [
    { title: 'Vigorous Badge', href: 'https://homecoming.wiki/wiki/Vigorous_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: IndependencePort.key, coords: [-1615, 80, -1872] }, vidiotMapKey: '3' },
  ],
}
