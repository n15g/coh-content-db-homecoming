import { BadgeData } from 'coh-content-db'
import { WatcherOnTheKnoll } from '../exploration/watcher-on-the-knoll'

export const Juicer: BadgeData = {
  type: 'gladiator',
  key: 'juicer',
  setTitleId: [475],
  name: 'Juicer',
  morality: 'villainous',
  badgeText: 'The Freaks celebrate you as a force of anarchy.',
  links: [
    { title: 'Juicer Badge', href: 'https://homecoming.wiki/wiki/Juicer_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png',
  requirements: [
    { key: WatcherOnTheKnoll.key, type: 'badge', badgeKey: WatcherOnTheKnoll.key },
  ],
}
