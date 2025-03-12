import { BadgeData } from 'coh-content-db'
import { ThePerfectHitter } from './the-perfect-hitter'
import { ThePerfectHacker } from './the-perfect-hacker'
import { ThePerfectGrifter } from './the-perfect-grifter'
import { ThePerfectThief } from './the-perfect-thief'

export const Roleplayer: BadgeData = {
  type: 'EVENT',
  key: 'roleplayer',
  setTitle: { id: 2251 },
  name: [
    { value: 'Roleplayer' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: 'You\'ve obtained this Accolade by perfecting each of the roles in the Summer Blockbuster \'Casino Heist\'.' },
  ],
  acquisition: 'Acquire all 4 Summer Blockbuster perfect role badges.',
  links: [
    { title: 'Roleplayer Badge', href: 'https://homecoming.wiki/wiki/Toothbreaker_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/event/roleplayer.png' }],
  partials: [
    { key: ThePerfectHitter.key, type: 'BADGE', badgeKey: ThePerfectHitter.key },
    { key: ThePerfectHacker.key, type: 'BADGE', badgeKey: ThePerfectHacker.key },
    { key: ThePerfectGrifter.key, type: 'BADGE', badgeKey: ThePerfectGrifter.key },
    { key: ThePerfectThief.key, type: 'BADGE', badgeKey: ThePerfectThief.key },
  ],
}
