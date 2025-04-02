import { BadgeData } from 'coh-content-db'
import { SpinDoctor } from '../accomplishment/spin-doctor'
import { NewsFlash } from './news-flash'
import { FairBalanced } from './fair-balanced'
import { TelevisionAddict } from './television-addict'
import { TonightsTopStory } from './tonights-top-story'

export const MasterOfTheTpnCampus: BadgeData = {
  type: 'ACHIEVEMENT',
  key: 'master-of-tpn-campus',
  setTitle: { id: 2077 },
  name: [
    { value: 'Master of the TPN Campus' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: 'You have mastered the Incarnate Trial: TPN Campus.' },
  ],
  links: [
    { title: 'Master of the TPN Campus Badge', href: 'https://homecoming.wiki/wiki/Master_of_the_TPN_Campus_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/master-of-the-tpn-campus.png' },
  ],
  requirements: [
    { key: SpinDoctor.key, type: 'BADGE', badgeKey: SpinDoctor.key },
    { key: NewsFlash.key, type: 'BADGE', badgeKey: NewsFlash.key },
    { key: FairBalanced.key, type: 'BADGE', badgeKey: FairBalanced.key },
    { key: TelevisionAddict.key, type: 'BADGE', badgeKey: TelevisionAddict.key },
    { key: TonightsTopStory.key, type: 'BADGE', badgeKey: TonightsTopStory.key },
  ],
}
