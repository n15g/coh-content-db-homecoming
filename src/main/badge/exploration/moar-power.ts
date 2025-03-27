import { BadgeData, mapLink } from 'coh-content-db'
import { Neutropolis } from '../../map/neutropolis'

export const MoarPower: BadgeData = {
  type: 'EXPLORATION',
  key: 'moar-power',
  setTitle: { id: 1727 },
  name: [{ value: 'Moar Power' }],
  alignment: ['H', 'V', 'P'],
  mapKey: Neutropolis.key,
  loc: [5760, 224, 2244],
  badgeText: [{
    value: 'Praetor Keyes\'s anti-matter reactors are a boundless source of energy, once supplying all the power for the entire Eastern United States.'
      + ' It was their presence which led Emperor Cole to declare Praetoria City as the capital of the new world.'
      + ' Even at peak demand, barely one-third of the reactors\' full power is needed.',
  }],
  notes: `Located in ${mapLink(Neutropolis)} on the top platform of the westernmost reactor 112 yards NW of the Keyes Island marker.`,
  links: [
    { title: 'Moar Power Badge', href: 'https://homecoming.wiki/wiki/Moar_Power_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png' }],
  vidiotMapKey: '5',
}
