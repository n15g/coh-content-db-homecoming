import { BadgeData, zoneLink } from 'coh-content-db'
import { ReclusesVictory } from '../../zone/recluses-victory'

export const BackFromTheFuture: BadgeData = {
  type: 'pvp',
  key: 'back-from-the-future',
  setTitleId: [566],
  name: 'Back From the Future',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: '100 pillboxes have been captured by you, you are truly a Time Bandit.',
  acquisition: `Capture 100 pillboxes in ${zoneLink(ReclusesVictory)}.`,
  links: [
    { title: 'Back from the Future Badge', href: 'https://homecoming.wiki/wiki/Back_from_the_Future_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/pvp/back-from-the-future.png',
}
