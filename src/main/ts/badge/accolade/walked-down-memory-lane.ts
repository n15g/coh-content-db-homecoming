import { BadgeData } from 'coh-content-db'
import { Trustworthy } from '../exploration/trustworthy'
import { Knowledgeable } from '../exploration/knowledgeable'
import { Virtuous } from '../exploration/virtuous'
import { SilentSentinel } from '../exploration/silent-sentinel'
import { Condemned } from '../exploration/condemned'
import { Resilient } from '../exploration/resilient'
import { OutOfHarmsWay } from '../exploration/out-of-harms-way'
import { CityTraveler } from '../exploration/city-traveler'

export const WalkedDownMemoryLane: BadgeData = {
  type: 'accolade',
  key: 'walked-down-memory-lane',
  setTitleId: [2325],
  name: 'Walked Down Memory Lane',
  releaseDate: '2012-11-30',
  morality: 'heroic',
  badgeText: `You've obtained this Accolade by earning every Exploration badge within Echo: Atlas Park.`,
  links: [
    { title: 'Walked Down Memory Lane Badge', href: 'https://homecoming.wiki/wiki/Walked_Down_Memory_Lane_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/explore-acc-h.png',
  requirements: [
    { key: Trustworthy.key, type: 'badge', badgeKey: Trustworthy.key },
    { key: Knowledgeable.key, type: 'badge', badgeKey: Knowledgeable.key },
    { key: Virtuous.key, type: 'badge', badgeKey: Virtuous.key },
    { key: SilentSentinel.key, type: 'badge', badgeKey: SilentSentinel.key },
    { key: Condemned.key, type: 'badge', badgeKey: Condemned.key },
    { key: Resilient.key, type: 'badge', badgeKey: Resilient.key },
    { key: OutOfHarmsWay.key, type: 'badge', badgeKey: OutOfHarmsWay.key },
    { key: CityTraveler.key, type: 'badge', badgeKey: CityTraveler.key },
  ],
}
