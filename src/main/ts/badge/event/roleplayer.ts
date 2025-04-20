import { BadgeData } from 'coh-content-db'
import { ThePerfectHitter } from './the-perfect-hitter'
import { ThePerfectHacker } from './the-perfect-hacker'
import { ThePerfectGrifter } from './the-perfect-grifter'
import { ThePerfectThief } from './the-perfect-thief'

export const Roleplayer: BadgeData = {
  type: 'event',
  key: 'roleplayer',
  setTitleId: [2251],
  name: 'Roleplayer',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: `You've obtained this Accolade by perfecting each of the roles in the Summer Blockbuster 'Casino Heist'.`,
  acquisition: 'Acquire all 4 Summer Blockbuster perfect role badges.',
  links: [
    { title: 'Roleplayer Badge', href: 'https://homecoming.wiki/wiki/Toothbreaker_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/event/roleplayer.png',
  requirements: [
    { key: ThePerfectHitter.key, type: 'badge', badgeKey: ThePerfectHitter.key },
    { key: ThePerfectHacker.key, type: 'badge', badgeKey: ThePerfectHacker.key },
    { key: ThePerfectGrifter.key, type: 'badge', badgeKey: ThePerfectGrifter.key },
    { key: ThePerfectThief.key, type: 'badge', badgeKey: ThePerfectThief.key },
  ],
}
