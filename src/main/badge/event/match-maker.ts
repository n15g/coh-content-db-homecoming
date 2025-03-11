import { BadgeData } from 'coh-content-db'

export const MatchMaker: BadgeData = {
  type: 'EVENT',
  key: 'match-maker',
  setTitle: { id: 2112 },
  name: [
    { value: 'Match Maker' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: 'In honor of the season of Spring, you\'ve delivered Valentines throughout the world!' },
  ],
  acquisition: 'Deliver 7 Valentines to the proper recipient.',
  notes: 'To get this badge and/or the Missed Connection badge you must run the missions from Scratch for villains or Ganymede for heroes and then talk to DJ Zero.'
    + '\n\nDJ Zero will ask you if you want to deliver Valentines and once you say yes the valentines will drop like tip missions.',
  links: [
    { title: 'Match Maker Badge', href: 'https://homecoming.wiki/wiki/Match_Maker_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/event/match-maker.png' }],
}
