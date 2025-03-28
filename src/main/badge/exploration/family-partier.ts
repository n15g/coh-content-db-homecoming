import { BadgeData } from 'coh-content-db'
import { IndependencePort } from '../../zone/independence-port'

export const FamilyPartier: BadgeData = {
  type: 'EXPLORATION',
  key: 'family-partier',
  setTitle: { id: 1554 },
  name: [{ value: 'Family Partier' }],
  alignment: ['H'],
  zoneKey: IndependencePort.key,
  loc: [-12, -21, 2376],
  badgeText: [{
    value: 'The Family uses this area right in the shadow of Terra Volta to conduct various parties, and the occasional hit on one of their own.'
      + ' They\'ve also been searching for secret entrances into the reactor, though so far they have been unsuccessful.',
  }],
  notes: 'The Family Partier Badge is in the Power Island neighborhood of Independence Port.'
    + '\n\nIt is at the bottom of the boardwalk ramp on the south side of the island.',
  links: [
    { title: 'Family Partier Badge', href: 'https://homecoming.wiki/wiki/Family_Partier_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' }],
  vidiotMapKey: '6',
}
