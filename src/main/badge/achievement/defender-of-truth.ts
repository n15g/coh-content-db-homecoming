import { BadgeData } from 'coh-content-db'

export const DefenderOfTruth: BadgeData = {
  type: 'ACHIEVEMENT',
  key: 'defender-of-truth',
  setTitle: { id: 23, praetorianId: 1671 },
  name: [
    { alignment: 'H', value: 'Defender of Truth' },
    { alignment: 'V', sex: 'M', value: 'Wiseguy' },
    { alignment: 'V', sex: 'F', value: 'Wisegal' },
    { alignment: 'P', value: 'Rift Traveler' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { alignment: 'H', value: 'Positron has awarded you this badge for achieving Security Level 30.' },
    { alignment: 'V', value: 'Arachnos has awarded you the this badge for reaching Level 30.' },
    {
      alignment: 'P', value: 'Whether you have traveled to Primal Earth or delved into the otherworldly secrets of '
        + 'Praetoria, you have tested yourself against many new challenges, which has increased your '
        + 'skills rapidly. You\'ll need them.',
    },
  ],
  acquisition: 'Reach level 30',
  links: [
    { title: 'Defender of Truth Badge', href: 'https://homecoming.wiki/wiki/Defender_of_Truth_Badge' },
    { title: 'Wiseguy Badge', href: 'https://homecoming.wiki/wiki/Wiseguy_Badge' },
    { title: 'Wisegal Badge', href: 'https://homecoming.wiki/wiki/Wisegal_Badge' },
    { title: 'Rift Traveler Badge', href: 'https://homecoming.wiki/wiki/Rift_Traveler_Badge' },
  ],
  icon: [
    { alignment: 'H', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/defender-of-truth-h.png' },
    { alignment: 'V', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/defender-of-truth-v.png' },
  ],
}
