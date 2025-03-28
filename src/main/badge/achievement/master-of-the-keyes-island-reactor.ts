import { BadgeData } from 'coh-content-db'
import { AntiAntiMatter } from './anti-anti-matter'
import { BunkerBuster } from './bunker-buster'
import { LovesAChallenge } from './loves-a-challenge'
import { AvoidsTheGreenStuff } from './avoids-the-green-stuff'

export const MasterOfTheKeyesIslandReactor: BadgeData = {
  type: 'ACHIEVEMENT',
  key: 'master-of-keyes-island-reactor',
  setTitle: { id: 1994 },
  name: [
    { value: 'Master of the Keyes Island Reactor' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: 'You have mastered the Incarnate Trial: Keyes Island Reactor.' },
  ],
  links: [
    { title: 'Master of the Keyes Island Reactor Badge', href: 'https://homecoming.wiki/wiki/Master_of_the_Keyes_Island_Reactor_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/master-of-the-keyes-island-reactor.png' },
  ],
  requirements: [[
    { key: AntiAntiMatter.key, type: 'BADGE', badgeKey: AntiAntiMatter.key },
    { key: BunkerBuster.key, type: 'BADGE', badgeKey: BunkerBuster.key },
    { key: LovesAChallenge.key, type: 'BADGE', badgeKey: LovesAChallenge.key },
    { key: AvoidsTheGreenStuff.key, type: 'BADGE', badgeKey: AvoidsTheGreenStuff.key },
  ]],
}
