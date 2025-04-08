import { BadgeData } from 'coh-content-db'
import { NightWard } from '../../zone/night-ward'

export const FollowTheLight: BadgeData = {
  type: 'exploration',
  key: 'follow-the-light',
  setTitleId: [2231],
  name: 'Follow the Light',
  morality: 'all',
  badgeText: `You have discovered the first of many lighted paths in Night Ward.
The Carnival of Light has been working tirelessly to hold the darkness of this realm at bay by way of their protective luster.
With the light as your guide you are free to traverse Night Ward's darkest corners, undetected by the countless dangers that heed her call.`,
  notes: `Located in the The Arcane Quarter neighborhood, 99 yards S of the map marker, near the Mistress of Fate.`,
  links: [
    { title: 'Follow the Light Badge', href: 'https://homecoming.wiki/wiki/Follow_the_Light_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: NightWard.key, coords: [1276, 49, -2134] }, vidiotMapKey: '6' },
  ],
}
