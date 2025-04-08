import { BadgeData } from 'coh-content-db'
import { FirebaseZulu } from '../../zone/firebase-zulu'

export const AlphaRanger: BadgeData = {
  type: 'exploration',
  key: 'alpha-ranger',
  setTitleId: [1800],
  name: 'Alpha Ranger',
  morality: 'paragon-city-access',
  badgeText: `The soldiers of Point Alpha man one of the most embattled posts in the Shadow Shard. They deal with skirmishes on an hourly basis and the attrition rate is very high.
Coming here is viewed as both a blessing; the men cheer any powered assistance they can get against an enemy they can barely comprehend; and a curse, for your presence indicates
the danger they are in and the inadequacy of their modern weapons against this threat. But being here has made you an honorary Alpha Ranger.`,
  notes: `Located 140 yards SE of the Point Alpha marker, just East of the truck parked inside the base.`,
  links: [
    { title: 'Alpha Ranger Badge', href: 'https://homecoming.wiki/wiki/Alpha_Ranger_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: FirebaseZulu.key, coords: [2338, 890, 2774] }, vidiotMapKey: '4' },
  ],
}
