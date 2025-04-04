import { BadgeData } from 'coh-content-db'
import { TiberianOverseer } from '../exploration/tiberian-overseer'
import { PraetorianOfPrivilege } from '../exploration/praetorian-of-privilege'
import { GoldDigger } from '../exploration/gold-digger'
import { TunedIn } from '../exploration/tuned-in'
import { MercyMissionary } from '../exploration/mercy-missionary'
import { ParkRanger } from '../exploration/park-ranger'
import { Seen } from '../exploration/seen'
import { Seer } from '../exploration/seer'

export const EmperorForADay: BadgeData = {
  type: 'accolade',
  key: 'emperor-for-a-day',
  setTitleId: [1635],
  name: 'Emperor for a Day',
  morality: 'all',
  badgeText: `You've obtained this Accolade by earning every Exploration badge within Imperial City.`,
  links: [
    { title: 'Emperor for a Day Badge', href: 'https://homecoming.wiki/wiki/Emperor_for_a_Day_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/explore-acc-p.png',
  requirements: [
    { key: TiberianOverseer.key, type: 'badge', badgeKey: TiberianOverseer.key },
    { key: PraetorianOfPrivilege.key, type: 'badge', badgeKey: PraetorianOfPrivilege.key },
    { key: GoldDigger.key, type: 'badge', badgeKey: GoldDigger.key },
    { key: TunedIn.key, type: 'badge', badgeKey: TunedIn.key },
    { key: MercyMissionary.key, type: 'badge', badgeKey: MercyMissionary.key },
    { key: ParkRanger.key, type: 'badge', badgeKey: ParkRanger.key },
    { key: Seen.key, type: 'badge', badgeKey: Seen.key },
    { key: Seer.key, type: 'badge', badgeKey: Seer.key },
  ],
}
