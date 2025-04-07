import { BadgeData, zoneLink } from 'coh-content-db'
import { UndergroundImperial } from '../../zone/underground-imperial'

export const UndergroundExplorer: BadgeData = {
  type: 'exploration',
  key: 'underground-explorer',
  setTitleId: [1652],
  name: 'Underground Explorer',
  morality: 'all',
  zoneKey: UndergroundImperial.key,
  badgeText: `You have shown considerable bravery in plumbing the depths of Praetoria's underground warrens. The dangers here are many but only by exploring deeper will you truly learn all of its secrets. Get going, Underground Explorer!`,
  notes: `
The Underground Explorer Badge has three locations in ${zoneLink(UndergroundImperial)}, all located just inside the Underground Access doors.

Its coordinates are (-1778, 528, -768), (-1744, 528, -4691) and (-2544, 528, -4531). It is only necessary to visit one location to earn this badge.`,
  links: [
    { title: 'Underground Explorer Badge', href: 'https://homecoming.wiki/wiki/Underground_Explorer_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png',
  vidiotMapKey: '8',
}
