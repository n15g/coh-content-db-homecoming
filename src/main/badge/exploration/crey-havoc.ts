import { BadgeData } from 'coh-content-db'
import { IndependencePort } from '../../zone/independence-port'

export const CreyHavoc: BadgeData = {
  type: 'EXPLORATION',
  key: 'crey-havoc',
  setTitle: { id: 122 },
  name: [{ value: 'Crey Havoc' }],
  alignment: ['H'],
  zoneKey: IndependencePort.key,
  loc: [-441, 2, -271],
  badgeText: [{ value: 'Crey had a facility in Independence Port for several years, but an industrial accident has permanently closed it.' }],
  notes: 'The Crey Havoc Badge is located on the Power Island neighborhood of Independence Port. It is just north of a ruined building east of the Terra Volta entrance.'
    + ' It is also located 256 yards northeast from the Terra Volta entrance.',
  links: [
    { title: 'Crey Havoc Badge', href: 'https://homecoming.wiki/wiki/Crey_Havoc_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' }],
  vidiotMapKey: '1',
}
