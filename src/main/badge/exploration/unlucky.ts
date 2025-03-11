import { BadgeData } from 'coh-content-db'
import { IndependencePort } from '../../map/independence-port'

export const Unlucky: BadgeData = {
  type: 'EXPLORATION',
  key: 'unlucky',
  setTitle: { id: 1556 },
  name: [{ value: 'Unlucky' }],
  alignment: ['H'],
  mapKey: IndependencePort.key,
  loc: [2044, 0, -9663],
  badgeText: [{
    value: 'Every member of Freedom Corps who works in this base is considered unlucky.'
      + ' The base is out-of-the-way from everything in Paragon City and has a long daily commute.'
      + ' Arachnos occasionally tries to spy on this base, but even they can\'t be bothered to come out this far from everything.',
  }],
  notes: 'The Unlucky Badge is in the Industry Pier neighborhood of Independence Port, directly in front of the Freedom Corps store.',
  links: [
    { title: 'Unlucky Badge', href: 'https://homecoming.wiki/wiki/Unlucky_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' }],
  vidiotMapKey: '8',
}
