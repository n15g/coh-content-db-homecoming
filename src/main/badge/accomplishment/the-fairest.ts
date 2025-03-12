import { BadgeData } from 'coh-content-db'

export const TheFairest: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'the-fairest',
  setTitle: { id: 1587 },
  name: [
    { alignment: 'H', value: 'The Fairest' },
    { alignment: 'V', value: 'Turf Protector' },
  ],
  alignment: ['H'],
  badgeText: [
    {
      alignment: 'H', value: 'Working with the government and your mirror self from another dimension, you stopped your evil '
        + 'doppelganger\'s plans to cause chaos and destruction throughout Paragon.',
    },
    {
      alignment: 'V', value: 'Working with the government and your mirror self from another dimension, you stopped your evil '
        + 'doppelganger\'s plans to cause chaos and destruction throughout Paragon. That\'s your turf.',
    },
  ],
  acquisition: 'Complete the story arc from Field Agent Keith Nance',
  links: [
    { title: 'The Fairest Badge', href: 'https://homecoming.wiki/wiki/The_Fairest_Badge' },
    { title: 'Turf Protector Badge', href: 'https://homecoming.wiki/wiki/Turf_Protector_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/the-fairest.png' },
  ],
}
