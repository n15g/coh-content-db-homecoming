import { BadgeData } from 'coh-content-db'
import { Eden } from '../../map/eden'

export const NaturalLaw: BadgeData = {
  type: 'EXPLORATION',
  key: 'natural-law',
  setTitle: { id: 1844 },
  name: [{ value: 'Natural Law' }],
  alignment: ['H'],
  mapKey: Eden.key,
  loc: [-309, -35, 3891],
  badgeText: [{
    value: `Before you are the steps that once led to the Circuit Court of Woodvale, a bastion of law and order.
But a new law rules here, one with rules as ancient as the planet's core, and in this court all of humanity has been found guilty.`,
  }],
  notes: `Located in [map:${Eden.key}] 200 yards south of The Serpentine marker, in the grass in front of a building in a small clearing in the trees.`,
  links: [
    { title: 'Natural Law Badge', href: 'https://homecoming.wiki/wiki/Natural_Law_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png' }],
  vidiotMapKey: '5',
}
