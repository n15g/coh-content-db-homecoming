import { BadgeData, zoneLink } from 'coh-content-db'
import { StMartial } from '../../zone/st-martial'

export const DeucesWild: BadgeData = {
  type: 'EXPLORATION',
  key: 'deuces-wild',
  setTitle: { id: 279 },
  name: [{ value: 'Deuces Wild' }],
  alignment: ['V'],
  zoneKey: StMartial.key,
  loc: [-3325, -29, -436],
  badgeText: [{
    value: `Twos are wild, but not as wild as you!`,
  }],
  notes: `Located in ${zoneLink(StMartial)}, in the doorway of the Ice Palace casino in the Jackpot neighborhood, 150 yards east of the Jackpot neighborhood marker.`,
  links: [
    { title: 'Deuces Wild Badge', href: 'https://homecoming.wiki/wiki/Deuces_Wild_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png' }],
  vidiotMapKey: '1',
}
