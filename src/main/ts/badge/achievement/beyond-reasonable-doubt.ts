import { BadgeData, missionLink } from 'coh-content-db'
import { DirtyWork } from '../../mission/dirty-work'

export const BeyondReasonableDoubt: BadgeData = {
  type: 'achievement',
  key: 'beyond-reasonable-doubt',
  setTitleId: [2408],
  name: 'Beyond Reasonable Doubt',
  releaseDate: '2019-06-01',
  morality: 'heroic',
  badgeText: 'It is better that ten guilty persons escape than that one innocent suffer.',
  acquisition: `Spare Rider in the ${missionLink(DirtyWork)} story arc.`,
  links: [
    { title: 'Beyond Reasonable Doubt Badge', href: 'https://homecoming.wiki/wiki/Beyond_Reasonable_Doubt_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/beyond-reasonable-doubt.png',
}
