import { BadgeData, mapLink } from 'coh-content-db'
import { SirensCall } from '../../map/sirens-call'
import { Hangman } from '../exploration/hangman'
import { Politician } from '../exploration/politician'
import { BroadShoulders } from '../exploration/broad-shoulders'
import { Piratical } from '../exploration/piratical'
import { HotDog } from '../exploration/hot-dog'
import { StillStanding } from '../exploration/still-standing'
import { Volatile } from '../exploration/volatile'
import { WastedResources } from '../exploration/wasted-resources'

export const AnsweredTheCall: BadgeData = {
  type: 'ACCOLADE',
  key: 'answered-the-call',
  setTitle: { id: 2410 },
  name: [
    { value: 'Answered the Call' },
  ],
  alignment: ['H', 'V', 'P'],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/pvp-acc.png' }],
  badgeText: [
    { value: `You've obtained this Accolade by earning every Exploration badge within Siren's Call.` },
  ],
  notes: `Visit all exploration badges in ${mapLink(SirensCall)}`,
  links: [
    { title: 'Answered the Call Badge', href: 'https://homecoming.wiki/wiki/Answered_the_Call_Badge' },
  ],
  partials: [
    { key: Hangman.key, type: 'BADGE', badgeKey: Hangman.key },
    { key: Politician.key, type: 'BADGE', badgeKey: Politician.key },
    { key: BroadShoulders.key, type: 'BADGE', badgeKey: BroadShoulders.key },
    { key: Piratical.key, type: 'BADGE', badgeKey: Piratical.key },
    { key: HotDog.key, type: 'BADGE', badgeKey: HotDog.key },
    { key: StillStanding.key, type: 'BADGE', badgeKey: StillStanding.key },
    { key: Volatile.key, type: 'BADGE', badgeKey: Volatile.key },
    { key: WastedResources.key, type: 'BADGE', badgeKey: WastedResources.key },
  ],
}
