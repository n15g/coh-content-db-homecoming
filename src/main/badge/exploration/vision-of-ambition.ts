import { BadgeData, zoneLink } from 'coh-content-db'
import { Cimerora } from '../../zone/cimerora'

export const VisionOfAmbition: BadgeData = {
  type: 'exploration',
  key: 'vision-of-ambition',
  setTitleId: [2467],
  name: 'Vision of Ambition',
  morality: 'all',
  badgeText: `Before proclaiming himself Emperor, Romulus Augustus was often seen visiting this rampart in the mountains. Always alone, he would spend hours staring out towards the open sea. Some claim this was the birthplace of his machinations to overthrow Imperious and conquer Cimerora.`,
  zoneKey: Cimerora.key,
  loc: [-1724, 368.8, 1327],
  notes: `Located in ${zoneLink(Cimerora)} in the northeast corner of Castellum Quarter, in the center of a tower, 533 yards northeast of the Castellum Quarter neighborhood marker.`,
  links: [
    { title: 'Vision of Ambition Badge', href: 'https://homecoming.wiki/wiki/Vision_of_Ambition_Badge' },
  ],
  icon: [
    { alignment: 'hero', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' },
    { alignment: 'villain', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png' },
  ],
  vidiotMapKey: '7',
}
