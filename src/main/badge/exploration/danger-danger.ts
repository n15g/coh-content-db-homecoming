import { BadgeData, mapLink } from 'coh-content-db'
import { TerraVolta } from '../../map/terra-volta'
import { IndependencePort } from '../../map/independence-port'

export const DangerDanger: BadgeData = {
  type: 'EXPLORATION',
  key: 'danger-danger',
  setTitle: { id: 1838 },
  name: [{ value: 'Danger! Danger!' }],
  alignment: ['H'],
  mapKey: TerraVolta.key,
  loc: [1215, 144, -6727],
  badgeText: [{
    value: `You stand at the border of one of the most dangerous places in all of Paragon City.
Before you lies a seething cauldron of anger, malice, and greed centered around the pumping heart of the city: the Terra Volta Nuclear Reactor.
Between the many villains who prowl the streets here there lies the danger of electrocution or radiation exposure, so tread carefully.`,
  }],
  notes: `168 yards south of the ${mapLink(IndependencePort)} gate, on the roof of the building.`,
  links: [
    { title: 'Danger! Danger! Badge', href: 'https://homecoming.wiki/wiki/Danger!_Danger!_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png' }],
  vidiotMapKey: '5',
}
