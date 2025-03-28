import { BadgeData } from 'coh-content-db'
import { Boomtown } from '../../zone/boomtown'

export const DestinedForValhalla: BadgeData = {
  type: 'EXPLORATION',
  key: 'destined-for-valhalla',
  setTitle: { id: 117 },
  name: [{ value: 'Destined for Valhalla' }],
  alignment: ['H'],
  zoneKey: Boomtown.key,
  loc: [-4098, 352, 2473],
  badgeText: [{
    value: 'Valkyrie proved herself to Positron by battling the Clockwork King on this spot.'
      + ' Although she did not succeed in defeating him, he was severely damaged and Clockwork activity came to a halt for several weeks afterwards.',
  }],
  notes: 'The Destined for Valhalla Badge is located in the Powderkeg neighborhood of Boomtown.'
    + '\n\nIt can be found approximately 560 yards east and slightly south of the Powderkeg marker, on top of a small landing where a tall builing is leaning into another.',
  links: [
    { title: 'Destined for Valhalla Badge', href: 'https://homecoming.wiki/wiki/Destined_for_Valhalla_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png' }],
  vidiotMapKey: '4',
}
