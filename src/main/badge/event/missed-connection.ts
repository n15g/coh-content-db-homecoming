import { BadgeData } from 'coh-content-db'

export const MissedConnection: BadgeData = {
  type: 'EVENT',
  key: 'missed-connection',
  setTitle: { id: 2113 },
  name: [
    { value: 'Missed Connection' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: 'You\'ve spurned the season of Spring in favor of sowing discord and heartbreak throughout the world by misdelivering Valentines!' },
  ],
  acquisition: 'Deliver 7 Valentines to the incorrect recipient.',
  notes: 'To get this badge and/or the Missed Connection badge you must run the missions from Scratch for villains or Ganymede for heroes and then talk to DJ Zero.'
    + '\n\nDJ Zero will ask you if you want to deliver Valentines and once you say yes the valentines will drop like tip missions.',
  links: [
    { title: 'Missed Connection Badge', href: 'https://homecoming.wiki/wiki/Missed_Connection_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/event/missed-connection.png' }],
}
