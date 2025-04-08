import { BadgeData } from 'coh-content-db'
import { Sentry } from '../defeat/sentry'
import { BombSpecialist } from '../defeat/bomb-specialist'
import { Chief } from '../defeat/chief'

export const Watchman: BadgeData = {
  type: 'accolade',
  key: 'watchman',
  setTitleId: [836],
  name: [
    { sex: 'M', value: 'Watchman' },
    { sex: 'F', value: 'Watchwoman' },
  ],
  morality: 'all',
  badgeText: [
    { alignment: 'hero', value: `You have defended Paragon City from the invading Rikti!` },
    { alignment: 'villain', value: `You have defended the Rogue Isles from the invading Rikti!` },
  ],
  effect: `Awards the Elusive Mind power.`,
  links: [
    { title: 'Watchman Badge', href: 'https://homecoming.wiki/wiki/Watchman_Badge' },
    { title: 'Watchwoman Badge', href: 'https://homecoming.wiki/wiki/Watchwoman_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/watchman.png',
  requirements: [
    { key: Sentry.key, type: 'badge', badgeKey: Sentry.key },
    { key: BombSpecialist.key, type: 'badge', badgeKey: BombSpecialist.key },
    { key: Chief.key, type: 'badge', badgeKey: Chief.key },
  ],
}
