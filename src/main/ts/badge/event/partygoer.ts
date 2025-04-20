import { BadgeData, contactLink } from 'coh-content-db'
import { DJZero } from '../../contact/dj-zero'

export const Partygoer: BadgeData = {
  type: 'event',
  key: 'partygoer',
  setTitleId: [736],
  name: 'Partygoer',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: `You've celebrated the one year anniversary of Pocket D by participating in DJ Zero's recreation of the inaugural Spring Fling.`,
  acquisition: `Complete ${contactLink(DJZero)}'s mission once during a Valentine's Day Event.`,
  links: [
    { title: 'Partygoer Badge', href: 'https://homecoming.wiki/wiki/Partygoer_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/event/partygoer.png',
}
