import { BadgeData } from 'coh-content-db'
import { IndependencePort } from '../../zone/independence-port'

export const CreyHavoc: BadgeData = {
  type: 'exploration',
  key: 'crey-havoc',
  setTitleId: [122],
  name: 'Crey Havoc',
  morality: 'paragon-city-access',
  badgeText: 'Crey had a facility in Independence Port for several years, but an industrial accident has permanently closed it.',
  notes: `Located on the Power Island neighborhood, just north of a ruined building 256 yards northeast from the Terra Volta entrance.`,
  links: [
    { title: 'Crey Havoc Badge', href: 'https://homecoming.wiki/wiki/Crey_Havoc_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: IndependencePort.key, coords: [-441, 2, -271] }, vidiotMapKey: '1' },
  ],
}
