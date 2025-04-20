import { BadgeData } from 'coh-content-db'
import { IndependencePort } from '../../zone/independence-port'

export const Connector: BadgeData = {
  type: 'exploration',
  key: 'connector',
  setTitleId: [1555],
  name: 'Connector',
  releaseDate: '2012-11-30',
  morality: 'paragon-city-access',
  badgeText: `The Bell-Wave is the twin of the nearly destroyed Valor Bridge.
Cynics say that the statue of the heroine at the end was built to inspire the bridge to be named after her, but the trend never took off.`,
  notes: 'Located in the Bell Point neighborhood, on the bridge 285 yards west of the Architect Entertainment building.',
  links: [
    { title: 'Connector Badge', href: 'https://homecoming.wiki/wiki/Connector_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: IndependencePort.key, coords: [-1088, 96, -7119], icon: 'badge', iconText: '7' } },
  ],
}
