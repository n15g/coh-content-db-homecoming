import { BadgeData } from 'coh-content-db'
import { StMartial } from '../../map/st-martial'

export const CamelSnot: BadgeData = {
  type: 'EXPLORATION',
  key: 'camel-snot',
  setTitle: { id: 282 },
  name: [{ value: 'Camel Snot' }],
  alignment: ['V'],
  mapKey: StMartial.key,
  loc: [-1885, 595, 2046],
  badgeText: [{
    value: `You've finally done it, you've mastered the art of mixing the elusive 'Camel Snot'`,
  }],
  notes: `Located in [map:${StMartial.key}], on the Golden Giza casino in the Babylon neighborhood.

The marker is on the top balcony (the last one before you reach the top of the pyramid). It is just west of the centerline of the slope.`,
  links: [
    { title: 'Camel Snot Badge', href: 'https://homecoming.wiki/wiki/Camel_Snot_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png' }],
  vidiotMapKey: '4',
}
