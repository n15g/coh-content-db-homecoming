import { BadgeData } from 'coh-content-db'
import { OnslaughtVictor } from '../pvp/onslaught-victor'
import { LeadingTheCharge } from '../pvp/leading-the-charge'
import { WarResearcher } from '../pvp/war-researcher'

export const ArenaDispatcher: BadgeData = {
  type: 'accolade',
  key: 'arena-dispatcher',
  gameId: 'ArenaWarpAccolade',
  setTitleId: [2594],
  name: 'Arena Dispatcher',
  releaseDate: '2026-12-30',
  morality: 'all',
  badgeText: `In recognition of your PvP participation, you've been provided a high-tech remote connection terminal that will allow you to join or host Arena matches from any virtually any location.`,
  effect: `Awards 'Remote Arena Terminal' accolade macro that can be used to access the Arena from most locations.`,
  links: [
    { title: 'Arena Dispatcher Badge', href: 'https://homecoming.wiki/wiki/Arena_Dispatcher_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/arena-dispatcher.png',
  requirements: [
    { key: OnslaughtVictor.key, type: 'badge', badgeKey: OnslaughtVictor.key },
    { key: LeadingTheCharge.key, type: 'badge', badgeKey: LeadingTheCharge.key },
    { key: WarResearcher.key, type: 'badge', badgeKey: WarResearcher.key },
  ],
}
