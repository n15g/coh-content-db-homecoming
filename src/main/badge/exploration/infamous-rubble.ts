import { BadgeData, zoneLink } from 'coh-content-db'
import { StMartial } from '../../zone/st-martial'

export const InfamousRubble: BadgeData = {
  type: 'EXPLORATION',
  key: 'infamous-rubble',
  setTitle: { id: 1507 },
  name: [{ value: 'Infamous Rubble' }],
  alignment: ['V'],
  zoneKey: StMartial.key,
  loc: [-4851, 153, 1868],
  badgeText: [{
    value: `This pile of rubble used to be one of the largest skyscrapers within St. Martial.
When the Wailers appeared, a huge battle broke out among Wailers, Arachnos and the Family, which led to the utter destruction of this building and the spread of Wailers into St. Martial.`,
  }],
  notes: `Located in ${zoneLink(StMartial)}, in the Hard Way neighborhood.

It is on top of the large pile of rubble 217 yards east of the neighborhood marker.

Note: The texture of the rubble can make it hard to see the badge marker.`,
  links: [
    { title: 'Infamous Rubble Badge', href: 'https://homecoming.wiki/wiki/Infamous_Rubble_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png' }],
  vidiotMapKey: '7',
}
