import { BadgeData } from 'coh-content-db'
import { UndergroundImperial } from '../../map/underground-imperial'

export const Engineer: BadgeData = {
  type: 'EXPLORATION',
  key: 'engineer',
  setTitle: { id: 1647 },
  name: [{ value: 'Engineer' }],
  alignment: ['H', 'V', 'P'],
  mapKey: UndergroundImperial.key,
  loc: [-2015, 464, -193],
  badgeText: [{
    value: 'Much of the important maintenance to the city\'s infrastructure is secreted away underground so as to not sully the pristine cityscape of Emperor Cole\'s utopia.'
      + ' But this place is a haven for Engineers and mechanics, stick around a while and you might learn something.',
  }],
  notes: 'Located in [map:underground-imperial] NNW of Underground Transit. Its coordinates are (-2015, 464, -193).',
  links: [
    { title: 'Engineer Badge', href: 'https://homecoming.wiki/wiki/Engineer_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png' }],
  vidiotMapKey: '3',
}
