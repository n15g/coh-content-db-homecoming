import { BadgeData, contactLink } from 'coh-content-db'
import { Scratch } from '../../contact/scratch'
import { Ganymede } from '../../contact/ganymede'
import { DJZero } from '../../contact/dj-zero'

export const MatchMaker: BadgeData = {
  type: 'event',
  key: 'match-maker',
  setTitleId: [2112],
  name: 'Match Maker',
  morality: 'all',
  badgeText: `In honor of the season of Spring, you've delivered Valentines throughout the world!`,
  acquisition: 'Deliver 7 Valentines to the proper recipient.',
  notes: `Run the missions from ${contactLink(Scratch)} for villains or ${contactLink(Ganymede)} for heroes and then talk to ${contactLink(DJZero)}.

${contactLink(DJZero)} will ask you if you want to deliver Valentines and once you say yes the valentines will drop like tip missions.`,
  links: [
    { title: 'Match Maker Badge', href: 'https://homecoming.wiki/wiki/Match_Maker_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/event/match-maker.png',
}
