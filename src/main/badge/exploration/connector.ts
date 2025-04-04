import { BadgeData } from 'coh-content-db'
import { IndependencePort } from '../../zone/independence-port'

export const Connector: BadgeData = {
  type: 'exploration',
  key: 'connector',
  setTitleId: [1555],
  name: 'Connector',
  morality: 'heroic',
  zoneKey: IndependencePort.key,
  loc: [-1088, 96, -7119],
  badgeText: `The Bell-Wave is the twin of the nearly destroyed Valor Bridge.
Cynics say that the statue of the heroine at the end was built to inspire the bridge to be named after her, but the trend never took off.`,
  notes: 'Located in the Bell Point neighborhood, on the bridge 285 yards west of the Architect Entertainment building.',
  links: [
    { title: 'Connector Badge', href: 'https://homecoming.wiki/wiki/Connector_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png',
  vidiotMapKey: '7',
}
