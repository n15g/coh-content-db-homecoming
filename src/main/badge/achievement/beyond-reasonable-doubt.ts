import { BadgeData, contactLink, zoneLink } from 'coh-content-db'
import { ShaunaBraun } from '../../contact/shauna-braun'
import { Ouroboros } from '../../zone/ouroboros'

export const BeyondReasonableDoubt: BadgeData = {
  type: 'achievement',
  key: 'beyond-reasonable-doubt',
  setTitleId: [2408],
  name: 'Beyond Reasonable Doubt',
  morality: 'heroic',
  badgeText: 'It is better that ten guilty persons escape than that one innocent suffer.',
  acquisition: `Kill Rider in the story arc 'Dirty Work' from ${contactLink(ShaunaBraun)}.`,
  notes: `To get this badge in ${zoneLink(Ouroboros)}, a vigilante can select the "Dirty Work" entry with number 26.01 at level 25-29.`,
  links: [
    { title: 'Beyond Reasonable Doubt Badge', href: 'https://homecoming.wiki/wiki/Beyond_Reasonable_Doubt_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/beyond-reasonable-doubt.png',
}
