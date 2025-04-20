import { BadgeData } from 'coh-content-db'
import { TwistedReflections } from '../../mission/twisted-reflections'

export const TheFairest: BadgeData = {
  type: 'accomplishment',
  key: 'the-fairest',
  setTitleId: [1587],
  name: [
    { alignment: 'hero', value: 'The Fairest' },
    { alignment: 'villain', value: 'Turf Protector' },
  ],
  releaseDate: '2012-11-30',
  morality: 'heroic',
  badgeText: [
    { alignment: 'hero', value: `Working with the government and your mirror self from another dimension, you stopped your evil doppelganger's plans to cause chaos and destruction throughout Paragon.` },
    { alignment: 'villain', value: `Working with the government and your mirror self from another dimension, you stopped your evil doppelganger's plans to cause chaos and destruction throughout Paragon. That's your turf.` },
  ],
  links: [
    { title: 'The Fairest Badge', href: 'https://homecoming.wiki/wiki/The_Fairest_Badge' },
    { title: 'Turf Protector Badge', href: 'https://homecoming.wiki/wiki/Turf_Protector_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/the-fairest.png',
  requirements: [
    { key: TwistedReflections.key, type: 'mission', missionKey: TwistedReflections.key },
  ],
}
