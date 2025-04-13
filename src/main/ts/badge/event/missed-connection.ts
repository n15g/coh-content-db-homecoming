import { BadgeData, contactLink } from 'coh-content-db'
import { Scratch } from '../../contact/scratch'
import { Ganymede } from '../../contact/ganymede'
import { DJZero } from '../../contact/dj-zero'

export const MissedConnection: BadgeData = {
  type: 'event',
  key: 'missed-connection',
  setTitleId: [2113],
  name: 'Missed Connection',
  morality: 'all',
  badgeText: `You've spurned the season of Spring in favor of sowing discord and heartbreak throughout the world by misdelivering Valentines!`,
  acquisition: 'Deliver 7 Valentines to the incorrect recipient.',
  notes: `Run the missions from ${contactLink(Scratch)} for villains or ${contactLink(Ganymede)} for heroes and then talk to ${contactLink(DJZero)}.

${contactLink(DJZero)} will ask you if you want to deliver Valentines and once you say yes the valentines will drop like tip missions.`,
  links: [
    { title: 'Missed Connection Badge', href: 'https://homecoming.wiki/wiki/Missed_Connection_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/event/missed-connection.png',
}
