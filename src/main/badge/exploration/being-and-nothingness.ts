import { BadgeData, zoneLink } from 'coh-content-db'
import { CascadeArchipelago } from '../../zone/cascade-archipelago'

export const BeingAndNothingness: BadgeData = {
  type: 'EXPLORATION',
  key: 'being-and-nothingness',
  setTitle: { id: 1807 },
  name: [{ value: 'Being and Nothingness' }],
  alignment: ['H'],
  zoneKey: CascadeArchipelago.key,
  loc: [3293, 1224, -3193],
  badgeText: [{
    value: 'A sense of floating encapsulates you, a lightness of being that does not bring with it feelings of ease or contentment, but of nothingness and insignificance.'
      + ' Vertigo sends your senses reeling and the urge to leave this place is undeniable. You do not belong here, you are the alien here, and nowhere else is this feeling more acute.',
  }],
  notes: `Located in ${zoneLink(CascadeArchipelago)} 247 yards SSW of The Air Shoals marker, in the middle of a floating rock.`,
  links: [
    { title: 'Being and Nothingness Badge', href: 'https://homecoming.wiki/wiki/Being_and_Nothingness_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png' }],
  vidiotMapKey: '3',
}
