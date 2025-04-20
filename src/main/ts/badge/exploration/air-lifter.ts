import { BadgeData } from 'coh-content-db'
import { IndependencePort } from '../../zone/independence-port'

export const AirLifter: BadgeData = {
  type: 'exploration',
  key: 'air-lifter',
  setTitleId: [1552],
  name: 'Air Lifter',
  releaseDate: '2012-11-30',
  morality: 'paragon-city-access',
  badgeText: `This is where workers in Terra Volta are air lifted in. From here, they're taken by several Longbow skiffs into the heart of the reactor.`,
  notes: `The Air Lifter Badge is in the Power Island neighborhood, 38 yards slightly northeast of the Terra Volta gate.`,
  links: [
    { title: 'Air Lifter Badge', href: 'https://homecoming.wiki/wiki/Air_Lifter_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: IndependencePort.key, coords: [173, 160, 22], icon: 'badge', iconText: '4' } },
  ],
}
