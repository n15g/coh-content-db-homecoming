import { BadgeData, mapLink } from 'coh-content-db'
import { Grandville } from '../../map/grandville'

export const Guttersnipe: BadgeData = {
  type: 'EXPLORATION',
  key: 'guttersnipe',
  setTitle: { id: 285 },
  name: [{ value: 'Guttersnipe' }],
  alignment: ['V'],
  mapKey: Grandville.key,
  loc: [2861, -475, 2310],
  badgeText: [{
    value: `Life at the bottom is rough, and after visiting Hobo Row in the Grandville's Gutter you can agree.`,
  }],
  notes: `Located in ${mapLink(Grandville)}, 228 yards south-southwest of the Spider City marker.`,
  links: [
    { title: 'Guttersnipe Badge', href: 'https://homecoming.wiki/wiki/Guttersnipe_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png' }],
  vidiotMapKey: '3',
}
