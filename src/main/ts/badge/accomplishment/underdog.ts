import { BadgeData, missionLink } from 'coh-content-db'
import { NobleIntentions } from '../../mission/noble-intentions'

export const Underdog: BadgeData = {
  type: 'accomplishment',
  key: 'underdog',
  setTitleId: [2512],
  name: 'Underdog',
  morality: 'villainous',
  badgeText: `You took advantage of the Council's election fraud scheme for your personal profit, and made a mockery of the democratic process by getting the Can Man elected to the city council.`,
  acquisition: `Complete the ${missionLink(NobleIntentions)} story arc, selecting all rogue responses.`,
  notes: `In the mission, "Chapter Three: Sheep Throat", at one point you will be attacked briefly by Ravenstorm and Dr. Todd, and can then talk to them.

During the dialogue, select the rogue responses to earn this badge.`,
  links: [
    { title: 'Underdog Badge', href: 'https://homecoming.wiki/wiki/Underdog_Badge' },
    { title: 'Walkthrough', href: 'https://forums.homecomingservers.com/topic/42642-noble-intentions-arc-pollster-and-underdog-badge-guide' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/underdog.png',
}
