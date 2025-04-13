import { BadgeData } from 'coh-content-db'
import { SpinDoctor } from '../accomplishment/spin-doctor'
import { NewsFlash } from './news-flash'
import { FairBalanced } from './fair-balanced'
import { TelevisionAddict } from './television-addict'
import { TonightsTopStory } from './tonights-top-story'

export const MasterOfTheTpnCampus: BadgeData = {
  type: 'achievement',
  key: 'master-of-tpn-campus',
  setTitleId: [2077],
  name: 'Master of the TPN Campus',
  morality: 'all',
  badgeText: 'You have mastered the Incarnate Trial: TPN Campus.',
  links: [
    { title: 'Master of the TPN Campus Badge', href: 'https://homecoming.wiki/wiki/Master_of_the_TPN_Campus_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/master-of-the-tpn-campus.png',
  requirements: [
    { key: SpinDoctor.key, type: 'badge', badgeKey: SpinDoctor.key },
    { key: NewsFlash.key, type: 'badge', badgeKey: NewsFlash.key },
    { key: FairBalanced.key, type: 'badge', badgeKey: FairBalanced.key },
    { key: TelevisionAddict.key, type: 'badge', badgeKey: TelevisionAddict.key },
    { key: TonightsTopStory.key, type: 'badge', badgeKey: TonightsTopStory.key },
  ],
}
