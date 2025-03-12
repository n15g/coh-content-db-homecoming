import { BadgeData } from 'coh-content-db'

export const Collector: BadgeData = {
  type: 'ACHIEVEMENT',
  key: 'collector',
  setTitle: { id: 27, praetorianId: 1661 },
  name: [
    { alignment: 'H', value: 'Collector' },
    { alignment: 'V', value: 'Native' },
    { alignment: 'P', value: 'Extractor of Secrets' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { alignment: 'H', value: 'You have collected 25 badges.' },
    { alignment: 'V', value: 'You\'ve earned enough badges to be called a Native.' },
    {
      alignment: 'P', value: '25 badges later, it\'s clear now nothing will keep you from uncovering the secrets of Praetoria '
        + 'and beyond.',
    },
  ],
  acquisition: 'Earn 25 badges',
  links: [
    { title: 'Collector Badge', href: 'https://homecoming.wiki/wiki/Collector_Badge' },
    { title: 'Native Badge', href: 'https://homecoming.wiki/wiki/Native_Badge' },
    { title: 'Extractor of Secrets Badge', href: 'https://homecoming.wiki/wiki/Extractor_of_Secrets_Badge' },
  ],
  icon: [
    { alignment: 'H', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/collector-h.png' },
    { alignment: 'V', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/collector-v.png' },
  ],
}
