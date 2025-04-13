import { BadgeData } from 'coh-content-db'
import { ArenaVictor } from '../pvp/arena-victor'
import { ArenaDuelist } from '../pvp/arena-duelist'
import { TournamentVictor } from '../pvp/tournament-victor'
import { ArenaSurvivalist } from '../pvp/arena-survivalist'
import { PentadVictor } from '../pvp/pentad-victor'

export const ArenaAllStar: BadgeData = {
  type: 'accolade',
  key: 'arena-all-star',
  setTitleId: [1361],
  name: 'Arena All-Star',
  morality: 'all',
  badgeText: `You've earned the Arena All-Star badge by winning a variety of different Arena matches.`,
  links: [
    { title: 'Arena All-Star Badge', href: 'https://homecoming.wiki/wiki/Arena_All-Star_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/arena-all-star.png',
  requirements: [
    { key: ArenaVictor.key, type: 'badge', badgeKey: ArenaVictor.key },
    { key: ArenaDuelist.key, type: 'badge', badgeKey: ArenaDuelist.key },
    { key: TournamentVictor.key, type: 'badge', badgeKey: TournamentVictor.key },
    { key: ArenaSurvivalist.key, type: 'badge', badgeKey: ArenaSurvivalist.key },
    { key: PentadVictor.key, type: 'badge', badgeKey: PentadVictor.key },
  ],
}
