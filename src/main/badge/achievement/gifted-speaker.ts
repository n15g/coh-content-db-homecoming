import { BadgeData } from 'coh-content-db'

export const GiftedSpeaker: BadgeData = {
  type: 'ACHIEVEMENT',
  key: 'gifted-speaker',
  setTitle: { id: 2095 },
  name: [
    { value: 'Gifted Speaker' },
  ],
  alignment: ['V'],
  badgeText: [
    {
      value: 'You know how to work a crowd when you need to. With the help of a psychic suggestion device, '
        + 'of course.',
    },
  ],
  acquisition: 'Complete the story arc from Bane Spider Ruben',
  links: [
    { title: 'Gifted Speaker Badge', href: 'https://homecoming.wiki/wiki/Gifted_Speaker_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/gifted-speaker.png' },
  ],
}
