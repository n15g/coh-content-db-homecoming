import { BadgeData, contactLink } from 'coh-content-db'
import { DJZero } from '../../contact/dj-zero'
import { FatherTime } from '../../contact/father-time'

export const Toothbreaker: BadgeData = {
  type: 'event',
  key: 'toothbreaker',
  setTitleId: [528],
  name: 'Toothbreaker',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: 'You have defeated Snaptooth 5 times, and are truly a Toothbreaker.',
  acquisition: 'Defeat Snaptooth 5 times.',
  notes: `Snaptooth can be found in the following missions:

1. "Find Snaptooth and take him out" from ${contactLink(DJZero)} during the Valentine's Day Event.
2. "Rescue Baby New Year from Snaptooth!" from ${contactLink(FatherTime)} during the Winter Events.`,
  links: [
    { title: 'Toothbreaker Badge', href: 'https://homecoming.wiki/wiki/Toothbreaker_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/event/toothbreaker.png',
}
