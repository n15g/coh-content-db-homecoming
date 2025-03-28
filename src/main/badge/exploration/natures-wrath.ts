import { BadgeData, zoneLink } from 'coh-content-db'
import { Eden } from '../../zone/eden'

export const NaturesWrath: BadgeData = {
  type: 'EXPLORATION',
  key: 'natures-wrath',
  setTitle: { id: 1843 },
  name: [{ value: 'Nature\'s Wrath' }],
  alignment: ['H'],
  zoneKey: Eden.key,
  loc: [-1963, 55, 3257],
  badgeText: [{
    value: `This hill rises like a blister above the canopy that spread like a green plaque to devour Woodvale.
            This is a good vantage point to see the devastation the Devouring Earth have wrought.
            But it is also strangely calm, an oasis of quiet in a sea of slavering monstrosities.
            You are not sure why this hill is so devoid of danger, perhaps it is a true reflection of what the Devouring Earth have to offer.
            But such thoughts are borderline insane and likely planted there by some trick of Hamidon's making.`,
  }],
  notes: `Located in ${zoneLink(Eden)} 206 yards west of The Pit marker, atop a hill next to a light rail track.`,
  links: [
    { title: 'Nature\'s Wrath Badge', href: 'https://homecoming.wiki/wiki/Nature%27s_Wrath_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png' }],
  vidiotMapKey: '4',
}
