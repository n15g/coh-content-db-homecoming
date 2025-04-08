import { BadgeData, contactLink, zoneLink } from 'coh-content-db'
import { Ouroboros } from '../../zone/ouroboros'
import { JohnHouston } from '../../contact/john-houston'

export const Pollster: BadgeData = {
  type: 'accomplishment',
  key: 'pollster',
  setTitleId: [2513],
  name: 'Pollster',
  morality: 'villainous',
  badgeText: `You protected democracy by exposing the Council's election fraud scheme to put Alexander 'The Great' Pavlidis on the city council.`,
  acquisition: `Complete the Noble Intentions arc from ${contactLink(JohnHouston)}, selecting all hero responses.`,
  notes: `In the third mission of the Noble Intentions arc, at one point you will be attacked briefly by Ravenstorm and Dr. Todd, then you can then talk to them. During the dialogue, select the hero responses to earn this badge.

To get this badge in ${zoneLink(Ouroboros)}, a Rogue can select the "Noble Intentions" entry with number 27.06 at level 40-44.`,
  links: [
    { title: 'Pollster Badge', href: 'https://homecoming.wiki/wiki/Pollster_Badge' },
    { title: 'Detailed Walkthrough', href: 'https://forums.homecomingservers.com/topic/42642-noble-intentions-arc-pollster-and-underdog-badge-guide/' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/pollster.png',
}
