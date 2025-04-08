import { BadgeData, zoneLink } from 'coh-content-db'
import { TerraVolta } from '../../zone/terra-volta'
import { IndependencePort } from '../../zone/independence-port'

export const DangerDanger: BadgeData = {
  type: 'exploration',
  key: 'danger-danger',
  setTitleId: [1838],
  name: 'Danger! Danger!',
  morality: 'paragon-city-access',
  badgeText: `You stand at the border of one of the most dangerous places in all of Paragon City.
Before you lies a seething cauldron of anger, malice, and greed centered around the pumping heart of the city: the Terra Volta Nuclear Reactor.
Between the many villains who prowl the streets here there lies the danger of electrocution or radiation exposure, so tread carefully.`,
  notes: `Located 168 yards south of the ${zoneLink(IndependencePort)} gate, on the roof of the building.`,
  links: [
    { title: 'Danger! Danger! Badge', href: 'https://homecoming.wiki/wiki/Danger!_Danger!_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: TerraVolta.key, coords: [1215, 144, -6727] }, vidiotMapKey: '5' },
  ],
}
