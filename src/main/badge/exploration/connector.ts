import { BadgeData } from 'coh-content-db'
import { IndependencePort } from '../../zone/independence-port'

export const Connector: BadgeData = {
  type: 'EXPLORATION',
  key: 'connector',
  setTitle: { id: 1555 },
  name: [{ value: 'Connector' }],
  alignment: ['H'],
  zoneKey: IndependencePort.key,
  loc: [-1088, 96, -7119],
  badgeText: [{
    value: 'The Bell-Wave is the twin of the nearly destroyed Valor Bridge.'
      + ' Cynics say that the statue of the heroine at the end was built to inspire the bridge to be named after her, but the trend never took off.',
  }],
  notes: 'The Connector Badge is in the Bell Point neighborhood of Independence Port.\n\nIt is on the bridge 285 yards west of the Architect Entertainment building.',
  links: [
    { title: 'Connector Badge', href: 'https://homecoming.wiki/wiki/Connector_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' }],
  vidiotMapKey: '7',
}
