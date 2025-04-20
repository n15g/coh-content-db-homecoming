import { BadgeData } from 'coh-content-db'
import { Neutropolis } from '../../zone/neutropolis'

export const MoarPower: BadgeData = {
  type: 'exploration',
  key: 'moar-power',
  setTitleId: [1727],
  name: 'Moar Power',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: `Praetor Keyes's anti-matter reactors are a boundless source of energy, once supplying all the power for the entire Eastern United States.
It was their presence which led Emperor Cole to declare Praetoria City as the capital of the new world.
Even at peak demand, barely one-third of the reactors' full power is needed.`,
  notes: `Located on the top platform of the westernmost reactor 112 yards NW of the Keyes Island marker.`,
  links: [
    { title: 'Moar Power Badge', href: 'https://homecoming.wiki/wiki/Moar_Power_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: Neutropolis.key, coords: [5760, 224, 2244], icon: 'badge', iconText: '5' } },
  ],
}
