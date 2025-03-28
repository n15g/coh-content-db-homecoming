import { BadgeData, zoneLink } from 'coh-content-db'
import { Grandville } from '../../zone/grandville'

export const MasterOfTheAirwaves: BadgeData = {
  type: 'EXPLORATION',
  key: 'master-of-the-airwaves',
  setTitle: { id: 286 },
  name: [
    { sex: 'M', value: 'Master of the Airwaves' },
    { sex: 'F', value: 'Mistress of the Airwaves' },
  ],
  alignment: ['V'],
  zoneKey: Grandville.key,
  loc: [2726, 734, 1043],
  badgeText: [{
    value: `Top of the world! You have climbed to the top of the radio tower in Grandville.`,
  }],
  notes: `Located in ${zoneLink(Grandville)}, in the Tangle neighborhood.
    
The marker is on a ledge on the large tower in the center of the zone. It is located on the south face of the tower just above the large Arachnos logo.`,
  links: [
    { title: 'Master of the Airwaves Badge', href: 'https://homecoming.wiki/wiki/Master_of_the_Airwaves_Badge' },
    { title: 'Mistress of the Airwaves Badge', href: 'https://homecoming.wiki/wiki/Mistress_of_the_Airwaves_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png' }],
  vidiotMapKey: '4',
}
