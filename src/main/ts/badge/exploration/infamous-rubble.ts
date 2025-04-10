import { BadgeData } from 'coh-content-db'
import { StMartial } from '../../zone/st-martial'

export const InfamousRubble: BadgeData = {
  type: 'exploration',
  key: 'infamous-rubble',
  setTitleId: [1507],
  name: 'Infamous Rubble',
  morality: 'rogue-isles-access',
  badgeText: `This pile of rubble used to be one of the largest skyscrapers within St. Martial.
When the Wailers appeared, a huge battle broke out among Wailers, Arachnos and the Family, which led to the utter destruction of this building and the spread of Wailers into St. Martial.`,
  notes: `Located in the Hard Way neighborhood, on top of the large pile of rubble 217 yards east of the neighborhood marker.

**Note:** The texture of the rubble can make it hard to see the badge marker.`,
  links: [
    { title: 'Infamous Rubble Badge', href: 'https://homecoming.wiki/wiki/Infamous_Rubble_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: StMartial.key, coords: [-4851, 153, 1868], icon: 'badge', iconText: '7' } },
  ],
}
