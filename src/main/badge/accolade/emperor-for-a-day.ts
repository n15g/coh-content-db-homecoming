import { BadgeData, mapLink } from 'coh-content-db'
import { ImperialCity } from '../../map/imperial-city'
import { TiberianOverseer } from '../exploration/tiberian-overseer'
import { PraetorianOfPrivilege } from '../exploration/praetorian-of-privilege'
import { GoldDigger } from '../exploration/gold-digger'
import { TunedIn } from '../exploration/tuned-in'
import { MercyMissionary } from '../exploration/mercy-missionary'
import { ParkRanger } from '../exploration/park-ranger'
import { Seen } from '../exploration/seen'
import { Seer } from '../exploration/seer'

export const EmperorForADay: BadgeData = {
  type: 'ACCOLADE',
  key: 'emperor-for-a-day',
  setTitle: { id: 1635 },
  name: [
    { value: 'Emperor for a Day' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: `You've obtained this Accolade by earning every Exploration badge within Imperial City.` },
  ],
  notes: `Visit all exploration badges in ${mapLink(ImperialCity)}`,
  links: [
    { title: 'Emperor for a Day Badge', href: 'https://homecoming.wiki/wiki/Emperor_for_a_Day_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/explore-acc-p.png' },
  ],
  partials: [
    { key: TiberianOverseer.key, type: 'BADGE', badgeKey: TiberianOverseer.key },
    { key: PraetorianOfPrivilege.key, type: 'BADGE', badgeKey: PraetorianOfPrivilege.key },
    { key: GoldDigger.key, type: 'BADGE', badgeKey: GoldDigger.key },
    { key: TunedIn.key, type: 'BADGE', badgeKey: TunedIn.key },
    { key: MercyMissionary.key, type: 'BADGE', badgeKey: MercyMissionary.key },
    { key: ParkRanger.key, type: 'BADGE', badgeKey: ParkRanger.key },
    { key: Seen.key, type: 'BADGE', badgeKey: Seen.key },
    { key: Seer.key, type: 'BADGE', badgeKey: Seer.key },
  ],
}
