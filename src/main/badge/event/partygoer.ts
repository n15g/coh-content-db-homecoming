import { BadgeData } from 'coh-content-db'

export const Partygoer: BadgeData = {
  type: 'EVENT',
  key: 'partygoer',
  setTitle: { id: 736 },
  name: [
    { value: 'Partygoer' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: 'You\'ve celebrated the one year anniversary of Pocket D by participating in DJ Zero\'s recreation of the inaugural Spring Fling.' },
  ],
  acquisition: 'Complete DJ Zero\'s mission once during a Valentine\'s Day Event.',
  links: [
    { title: 'Partygoer Badge', href: 'https://homecoming.wiki/wiki/Partygoer_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/event/partygoer.png' }],
}
