import { BadgeData } from 'coh-content-db'
import { Grandville } from '../../zone/grandville'

export const Guttersnipe: BadgeData = {
  type: 'exploration',
  key: 'guttersnipe',
  setTitleId: [285],
  name: 'Guttersnipe',
  morality: 'villainous',
  zoneKey: Grandville.key,
  loc: [2861, -475, 2310],
  badgeText: `Life at the bottom is rough, and after visiting Hobo Row in the Grandville's Gutter you can agree.`,
  notes: `Located 228 yards south-southwest of the Spider City marker.`,
  links: [
    { title: 'Guttersnipe Badge', href: 'https://homecoming.wiki/wiki/Guttersnipe_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png',
  vidiotMapKey: '3',
}
