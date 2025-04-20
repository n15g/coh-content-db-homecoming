import { BadgeData, contactLink, zoneLink } from 'coh-content-db'
import { DreamDoctor } from '../../contact/dream-doctor'
import { DarkAstoria } from '../../zone/dark-astoria'

export const BuddyCop: BadgeData = {
  type: 'achievement',
  key: 'buddy-cop',
  setTitleId: [2203],
  name: 'Buddy Cop',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: 'You rescued Detective Hopp from the Banished Pantheon in Dark Astoria. When the time came, he remembered you and was able to stay alive long enough for you to find him. The question is, did you actually save him?',
  acquisition: `Save Detective Hopp at least once in ${zoneLink(DarkAstoria)} before your final meeting in ${contactLink(DreamDoctor)}'s story arc.`,
  links: [
    { title: 'Buddy Cop Badge', href: 'https://homecoming.wiki/wiki/Buddy_Cop_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/da-zone.png',
}
