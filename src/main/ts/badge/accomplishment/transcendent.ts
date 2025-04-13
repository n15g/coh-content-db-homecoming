import { BadgeData } from 'coh-content-db'
import { CavernOfTranscendenceTrial } from '../../mission/cavern-of-transcendence-trial'

export const Transcendent: BadgeData = {
  type: 'accomplishment',
  key: 'transcendent',
  setTitleId: [70],
  name: 'Transcendent',
  morality: 'heroic',
  badgeText: 'You have become the master of the mystical gateway beneath the Hollows.',
  links: [
    { title: 'Transcendent Badge', href: 'https://homecoming.wiki/wiki/Transcendent_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/trial-1.png',
  requirements: [
    { key: CavernOfTranscendenceTrial.key, type: 'mission', missionKey: CavernOfTranscendenceTrial.key },
  ],
}
