import { BadgeData } from 'coh-content-db'

export const DefenderOfTruth: BadgeData = {
  type: 'achievement',
  key: 'defender-of-truth',
  setTitleId: [23, 1671],
  name: [
    { alignment: 'hero', value: 'Defender of Truth' },
    { alignment: 'villain', sex: 'M', value: 'Wiseguy' },
    { alignment: 'villain', sex: 'F', value: 'Wisegal' },
    { alignment: 'praetorian', value: 'Rift Traveler' },
  ],
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: [
    { alignment: 'hero', value: 'Positron has awarded you this badge for achieving Security Level 30.' },
    { alignment: 'villain', value: 'Arachnos has awarded you the this badge for reaching Level 30.' },
    { alignment: 'praetorian', value: `Whether you have traveled to Primal Earth or delved into the otherworldly secrets of Praetoria, you have tested yourself against many new challenges, which has increased your skills rapidly. You'll need them.` },
  ],
  acquisition: 'Reach level 30.',
  links: [
    { title: 'Defender of Truth Badge', href: 'https://homecoming.wiki/wiki/Defender_of_Truth_Badge' },
    { title: 'Wiseguy Badge', href: 'https://homecoming.wiki/wiki/Wiseguy_Badge' },
    { title: 'Wisegal Badge', href: 'https://homecoming.wiki/wiki/Wisegal_Badge' },
    { title: 'Rift Traveler Badge', href: 'https://homecoming.wiki/wiki/Rift_Traveler_Badge' },
  ],
  icon: [
    { alignment: 'hero', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/defender-of-truth-h.png' },
    { alignment: 'villain', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/defender-of-truth-v.png' },
  ],
}
