import { BadgeData } from 'coh-content-db'
import { KingsRow } from '../../map/kings-row'

export const ManOfVengeance: BadgeData = {
  type: 'EXPLORATION',
  key: 'man-of-vengeance',
  setTitle: { id: 1528 },
  name: [
    { sex: 'M', value: 'Man of Vengeance' },
    { sex: 'F', value: 'Woman of Vengeance' },
  ],
  alignment: ['H'],
  mapKey: KingsRow.key,
  loc: [573, -42, 704],
  badgeText: [{
    value: 'This is the wreckage of a warehouse owned by the Family.'
      + ' The man who killed Blue Steel\'s father was rumored to be taking shelter here.'
      + ' Blue Steel went to investigate, only to discover the Family had rigged the warehouse to explode.'
      + ' Blue Steel survived the explosion and has continued the hunt for his father\'s killer to this day.',
  }],
  notes: 'The Man of Vengeance Badge is at the entrance of the vacant/rubble lot 110 yards west of the PPD building (Detective Becktrees or Detective Freitag markers) in Kings Row.',
  links: [
    { title: 'Man of Vengeance Badge', href: 'https://homecoming.wiki/wiki/Man_of_Vengeance_Badge' },
    { title: 'Woman of Vengeance Badge', href: 'https://homecoming.wiki/wiki/Woman_of_Vengeance_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' }],
  vidiotMapKey: '8',
}
