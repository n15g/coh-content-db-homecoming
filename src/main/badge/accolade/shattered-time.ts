import { BadgeData } from 'coh-content-db'
import { Globetrotter } from '../exploration/globetrotter'
import { Ragnarok } from '../exploration/ragnarok'
import { TemporalFighter } from '../exploration/temporal-fighter'
import { LastStand } from '../exploration/last-stand'
import { AScarInTime } from '../exploration/a-scar-in-time'
import { TrueNeutral } from '../exploration/true-neutral'
import { WatchYourBack } from '../exploration/watch-your-back'
import { SickOfTimeTravel } from '../exploration/sick-of-time-travel'

export const ShatteredTime: BadgeData = {
  type: 'ACCOLADE',
  key: 'shattered-time',
  setTitle: { id: 2421 },
  name: 'Shattered Time',
  alignment: ['H', 'V', 'P'],
  badgeText: `You've obtained this Accolade by earning every Exploration badge within Recluse's Victory.`,
  links: [
    { title: 'Shattered Time Badge', href: 'https://homecoming.wiki/wiki/Shattered_Time_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/pvp-acc.png',
  requirements: [
    { key: Globetrotter.key, type: 'BADGE', badgeKey: Globetrotter.key },
    { key: Ragnarok.key, type: 'BADGE', badgeKey: Ragnarok.key },
    { key: TemporalFighter.key, type: 'BADGE', badgeKey: TemporalFighter.key },
    { key: LastStand.key, type: 'BADGE', badgeKey: LastStand.key },
    { key: AScarInTime.key, type: 'BADGE', badgeKey: AScarInTime.key },
    { key: TrueNeutral.key, type: 'BADGE', badgeKey: TrueNeutral.key },
    { key: WatchYourBack.key, type: 'BADGE', badgeKey: WatchYourBack.key },
    { key: SickOfTimeTravel.key, type: 'BADGE', badgeKey: SickOfTimeTravel.key },
  ],
}
