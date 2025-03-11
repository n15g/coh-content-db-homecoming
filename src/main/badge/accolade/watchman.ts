import { BadgeData } from 'coh-content-db'
import { Sentry } from '../defeat/sentry'
import { BombSpecialist } from '../defeat/bomb-specialist'
import { Chief } from '../defeat/chief'

export const Watchman: BadgeData = {
  type: 'ACCOLADE',
  key: 'watchman',
  setTitle: { id: 836 },
  name: [
    { sex: 'M', value: 'Watchman' },
    { sex: 'F', value: 'Watchwoman' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { alignment: 'H', value: `You have defended Paragon City from the invading Rikti!` },
    { alignment: 'V', value: `You have defended the Rogue Isles from the invading Rikti!` },
  ],
  notes: `Awards the Elusive Mind power`,
  links: [
    { title: 'Watchman Badge', href: 'https://homecoming.wiki/wiki/Watchman_Badge' },
    { title: 'Watchwoman Badge', href: 'https://homecoming.wiki/wiki/Watchwoman_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/watchman.png' },
  ],
  effect: `Elusive Mind`,
  partials: [
    { key: Sentry.key, type: 'BADGE', badgeKey: Sentry.key },
    { key: BombSpecialist.key, type: 'BADGE', badgeKey: BombSpecialist.key },
    { key: Chief.key, type: 'BADGE', badgeKey: Chief.key },
  ],
}
