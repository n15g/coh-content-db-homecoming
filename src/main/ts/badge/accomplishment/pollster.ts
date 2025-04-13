import { BadgeData, missionLink } from 'coh-content-db'
import { NobleIntentions } from '../../mission/noble-intentions'

export const Pollster: BadgeData = {
  type: 'accomplishment',
  key: 'pollster',
  setTitleId: [2513],
  name: 'Pollster',
  morality: 'villainous',
  badgeText: `You protected democracy by exposing the Council's election fraud scheme to put Alexander 'The Great' Pavlidis on the city council.`,
  acquisition: `Complete the ${missionLink(NobleIntentions)} story arc, selecting all hero responses.`,
  notes: `In the mission, "Chapter Three: Sheep Throat", at one point you will be attacked briefly by Ravenstorm and Dr. Todd, and can then talk to them.

During the dialogue, select the hero responses to earn this badge.`,
  links: [
    { title: 'Pollster Badge', href: 'https://homecoming.wiki/wiki/Pollster_Badge' },
    { title: 'Detailed Walkthrough', href: 'https://forums.homecomingservers.com/topic/42642-noble-intentions-arc-pollster-and-underdog-badge-guide/' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/pollster.png',
}
