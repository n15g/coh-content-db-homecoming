import { BadgeData } from 'coh-content-db'

export const Collector: BadgeData = {
  type: 'achievement',
  key: 'collector',
  setTitleId: [27, 1661],
  name: [
    { alignment: 'hero', value: 'Collector' },
    { alignment: 'villain', value: 'Native' },
    { alignment: 'praetorian', value: 'Extractor of Secrets' },
  ],
  morality: 'all',
  badgeText: [
    { alignment: 'hero', value: 'You have collected 25 badges.' },
    { alignment: 'villain', value: `You've earned enough badges to be called a Native.` },
    { alignment: 'praetorian', value: `25 badges later, it's clear now nothing will keep you from uncovering the secrets of Praetoria and beyond.` },
  ],
  acquisition: 'Earn 25 badges.',
  links: [
    { title: 'Collector Badge', href: 'https://homecoming.wiki/wiki/Collector_Badge' },
    { title: 'Native Badge', href: 'https://homecoming.wiki/wiki/Native_Badge' },
    { title: 'Extractor of Secrets Badge', href: 'https://homecoming.wiki/wiki/Extractor_of_Secrets_Badge' },
  ],
  icon: [
    { alignment: 'hero', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/collector-h.png' },
    { alignment: 'villain', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/collector-v.png' },
  ],
}
