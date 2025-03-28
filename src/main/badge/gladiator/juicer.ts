import { BadgeData } from 'coh-content-db'
import { WatcherOnTheKnoll } from '../exploration/watcher-on-the-knoll'

export const Juicer: BadgeData = {
  type: 'GLADIATOR',
  key: 'juicer',
  setTitle: { id: 475 },
  name: [
    { value: 'Juicer' },
  ],
  alignment: ['V'],
  badgeText: [
    { value: 'The Freaks celebrate you as a force of anarchy.' },
  ],
  links: [
    { title: 'Juicer Badge', href: 'https://homecoming.wiki/wiki/Juicer_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png' },
  ],
  requirements: [[
    { key: WatcherOnTheKnoll.key, type: 'BADGE', badgeKey: WatcherOnTheKnoll.key },
  ]],
}
