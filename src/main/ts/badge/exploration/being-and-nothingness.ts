import { BadgeData } from 'coh-content-db'
import { CascadeArchipelago } from '../../zone/cascade-archipelago'

export const BeingAndNothingness: BadgeData = {
  type: 'exploration',
  key: 'being-and-nothingness',
  setTitleId: [1807],
  name: 'Being and Nothingness',
  releaseDate: '2012-11-30',
  morality: 'paragon-city-access',
  badgeText: `A sense of floating encapsulates you, a lightness of being that does not bring with it feelings of ease or contentment, but of nothingness and insignificance.
Vertigo sends your senses reeling and the urge to leave this place is undeniable. You do not belong here, you are the alien here, and nowhere else is this feeling more acute.`,
  notes: `Located 247 yards SSW of The Air Shoals marker, in the middle of a floating rock.`,
  links: [
    { title: 'Being and Nothingness Badge', href: 'https://homecoming.wiki/wiki/Being_and_Nothingness_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: CascadeArchipelago.key, coords: [3293, 1224, -3193], icon: 'badge', iconText: '3' } },
  ],
}
