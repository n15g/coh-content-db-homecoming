import { BadgeData } from 'coh-content-db'
import { Trustworthy } from '../exploration/trustworthy'
import { Knowledgeable } from '../exploration/knowledgeable'
import { Virtuous } from '../exploration/virtuous'
import { Rookie } from '../exploration/rookie'
import { Condemned } from '../exploration/condemned'
import { Resilient } from '../exploration/resilient'
import { OutOfHarmsWay } from '../exploration/out-of-harms-way'
import { CityTraveler } from '../exploration/city-traveler'

export const WalkedDownMemoryLane: BadgeData = {
  type: 'ACCOLADE',
  key: 'walked-down-memory-lane',
  setTitle: { id: 2325 },
  name: 'Walked Down Memory Lane',
  alignment: ['H'],
  badgeText: `You've obtained this Accolade by earning every Exploration badge within Echo: Atlas Park.`,
  links: [
    { title: 'Walked Down Memory Lane Badge', href: 'https://homecoming.wiki/wiki/Walked_Down_Memory_Lane_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/explore-acc-h.png',
  requirements: [
    { key: Trustworthy.key, type: 'BADGE', badgeKey: Trustworthy.key },
    { key: Knowledgeable.key, type: 'BADGE', badgeKey: Knowledgeable.key },
    { key: Virtuous.key, type: 'BADGE', badgeKey: Virtuous.key },
    { key: Rookie.key, type: 'BADGE', badgeKey: Rookie.key },
    { key: Condemned.key, type: 'BADGE', badgeKey: Condemned.key },
    { key: Resilient.key, type: 'BADGE', badgeKey: Resilient.key },
    { key: OutOfHarmsWay.key, type: 'BADGE', badgeKey: OutOfHarmsWay.key },
    { key: CityTraveler.key, type: 'BADGE', badgeKey: CityTraveler.key },
  ],
}
