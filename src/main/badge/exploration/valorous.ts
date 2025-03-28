import { BadgeData } from 'coh-content-db'
import { IndependencePort } from '../../zone/independence-port'

export const Valorous: BadgeData = {
  type: 'EXPLORATION',
  key: 'valorous',
  setTitle: { id: 123 },
  name: [{ value: 'Valorous' }],
  alignment: ['H'],
  zoneKey: IndependencePort.key,
  loc: [947, 609, -1152],
  badgeText: [{ value: 'The titanic hero Atlas fell at Valor Bridge, protecting the city from invasion.' }],
  notes: 'The Valorous Badge is located in Independence Port on top of the southernmost tower of the Valor Bridge, the westernmost and longest suspension bridge in the zone.'
    + '\n\nIt is also 520 yards away from the Terra Volta entrance, lots of this distance includes going up.',
  links: [
    { title: 'Valorous Badge', href: 'https://homecoming.wiki/wiki/Valorous_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' }],
  vidiotMapKey: '2',
}
