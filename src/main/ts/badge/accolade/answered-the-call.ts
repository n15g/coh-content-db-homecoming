import { BadgeData } from 'coh-content-db'
import { Hangman } from '../exploration/hangman'
import { Politician } from '../exploration/politician'
import { BroadShoulders } from '../exploration/broad-shoulders'
import { Piratical } from '../exploration/piratical'
import { HotDog } from '../exploration/hot-dog'
import { StillStanding } from '../exploration/still-standing'
import { Volatile } from '../exploration/volatile'
import { WastedResources } from '../exploration/wasted-resources'

export const AnsweredTheCall: BadgeData = {
  type: 'accolade',
  key: 'answered-the-call',
  setTitleId: [2410],
  name: 'Answered the Call',
  morality: 'all',
  badgeText: `You've obtained this Accolade by earning every Exploration badge within Siren's Call.`,
  links: [
    { title: 'Answered the Call Badge', href: 'https://homecoming.wiki/wiki/Answered_the_Call_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/pvp-acc.png',
  requirements: [
    { key: Hangman.key, type: 'badge', badgeKey: Hangman.key },
    { key: Politician.key, type: 'badge', badgeKey: Politician.key },
    { key: BroadShoulders.key, type: 'badge', badgeKey: BroadShoulders.key },
    { key: Piratical.key, type: 'badge', badgeKey: Piratical.key },
    { key: HotDog.key, type: 'badge', badgeKey: HotDog.key },
    { key: StillStanding.key, type: 'badge', badgeKey: StillStanding.key },
    { key: Volatile.key, type: 'badge', badgeKey: Volatile.key },
    { key: WastedResources.key, type: 'badge', badgeKey: WastedResources.key },
  ],
}
