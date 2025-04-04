import { BadgeData } from 'coh-content-db'
import { Grandville } from '../../zone/grandville'

export const MasterOfTheAirwaves: BadgeData = {
  type: 'exploration',
  key: 'master-of-the-airwaves',
  setTitleId: [286],
  name: [
    { sex: 'M', value: 'Master of the Airwaves' },
    { sex: 'F', value: 'Mistress of the Airwaves' },
  ],
  morality: 'villainous',
  zoneKey: Grandville.key,
  loc: [2726, 734, 1043],
  badgeText: `Top of the world! You have climbed to the top of the radio tower in Grandville.`,
  notes: `Located in the Tangle neighborhood, on a ledge of the large central tower. The badge is positioned on the south face of the tower, just above the prominent Arachnos logo.`,
  links: [
    { title: 'Master of the Airwaves Badge', href: 'https://homecoming.wiki/wiki/Master_of_the_Airwaves_Badge' },
    { title: 'Mistress of the Airwaves Badge', href: 'https://homecoming.wiki/wiki/Mistress_of_the_Airwaves_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png',
  vidiotMapKey: '4',
}
