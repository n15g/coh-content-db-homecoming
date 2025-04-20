import { BadgeData } from 'coh-content-db'
import { StMartial } from '../../zone/st-martial'

export const CamelSnot: BadgeData = {
  type: 'exploration',
  key: 'camel-snot',
  setTitleId: [282],
  name: 'Camel Snot',
  releaseDate: '2012-11-30',
  morality: 'rogue-isles-access',
  badgeText: `You've finally done it, you've mastered the art of mixing the elusive 'Camel Snot'`,
  notes: `Located on the Golden Giza casino in the Babylon neighborhood, on the top balcony (the last one before you reach the top of the pyramid). It is just west of the centerline of the slope.`,
  links: [
    { title: 'Camel Snot Badge', href: 'https://homecoming.wiki/wiki/Camel_Snot_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: StMartial.key, coords: [-1885, 595, 2046], icon: 'badge', iconText: '4' } },
  ],
}
