import { BadgeData } from 'coh-content-db'
import { Cimerora } from '../../zone/cimerora'

export const VisionOfAmbition: BadgeData = {
  type: 'exploration',
  key: 'vision-of-ambition',
  setTitleId: [2467],
  name: 'Vision of Ambition',
  morality: 'all',
  badgeText: `Before proclaiming himself Emperor, Romulus Augustus was often seen visiting this rampart in the mountains. Always alone, he would spend hours staring out towards the open sea. Some claim this was the birthplace of his machinations to overthrow Imperious and conquer Cimerora.`,
  notes: `Located in the northeast corner of the Castellum Quarter, in the center of a tower 533 yards northeast of the neighborhood marker.`,
  links: [
    { title: 'Vision of Ambition Badge', href: 'https://homecoming.wiki/wiki/Vision_of_Ambition_Badge' },
  ],
  icon: [
    { alignment: 'hero', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' },
    { alignment: 'villain', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png' },
  ],
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: Cimerora.key, coords: [-1724, 368.8, 1327], icon: 'badge', iconText: '7' } },
  ],
}
