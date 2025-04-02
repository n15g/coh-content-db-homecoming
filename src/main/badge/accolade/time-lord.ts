import { BadgeData } from 'coh-content-db'
import { Cimeroran } from '../day-job/cimeroran'
import { Chronologist } from '../day-job/chronologist'

export const TimeLord: BadgeData = {
  type: 'ACCOLADE',
  key: 'time-lord',
  setTitle: { id: 1072 },
  name: [
    { value: 'Time Lord' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    {
      value: `Your presence in Cimerora and working with the Menders of Ouroboros has earned you the Time Lord Accolade.
 While logged out in either Cimerora or Ouroboros you will earn additional time for your Time Lord Power.`,
    },
  ],
  links: [
    { title: 'Time Lord Badge', href: 'https://homecoming.wiki/wiki/Time_Lord_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/time-lord.png' },
  ],
  requirements: [
    { key: Cimeroran.key, type: 'BADGE', badgeKey: Cimeroran.key },
    { key: Chronologist.key, type: 'BADGE', badgeKey: Chronologist.key },
  ],
}
