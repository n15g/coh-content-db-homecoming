import { BadgeData } from 'coh-content-db'
import { UndergroundImperial } from '../../zone/underground-imperial'

export const Engineer: BadgeData = {
  type: 'exploration',
  key: 'engineer',
  setTitleId: [1647],
  name: 'Engineer',
  morality: 'all',
  badgeText: `Much of the important maintenance to the city's infrastructure is secreted away underground so as to not sully the pristine cityscape of Emperor Cole's utopia.
But this place is a haven for Engineers and mechanics, stick around a while and you might learn something.`,
  notes: `Located NNW of Underground Transit.`,
  links: [
    { title: 'Engineer Badge', href: 'https://homecoming.wiki/wiki/Engineer_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: UndergroundImperial.key, coords: [-2015, 464, -193], icon: 'badge', iconText: '3' } },
  ],
}
