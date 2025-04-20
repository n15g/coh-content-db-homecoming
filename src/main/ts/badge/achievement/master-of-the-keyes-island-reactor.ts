import { BadgeData } from 'coh-content-db'
import { AntiAntiMatter } from './anti-anti-matter'
import { BunkerBuster } from './bunker-buster'
import { LovesAChallenge } from './loves-a-challenge'
import { AvoidsTheGreenStuff } from './avoids-the-green-stuff'

export const MasterOfTheKeyesIslandReactor: BadgeData = {
  type: 'achievement',
  key: 'master-of-keyes-island-reactor',
  setTitleId: [1994],
  name: 'Master of the Keyes Island Reactor',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: 'You have mastered the Incarnate Trial: Keyes Island Reactor.',
  links: [
    { title: 'Master of the Keyes Island Reactor Badge', href: 'https://homecoming.wiki/wiki/Master_of_the_Keyes_Island_Reactor_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/master-of-the-keyes-island-reactor.png',
  requirements: [
    { key: AntiAntiMatter.key, type: 'badge', badgeKey: AntiAntiMatter.key },
    { key: BunkerBuster.key, type: 'badge', badgeKey: BunkerBuster.key },
    { key: LovesAChallenge.key, type: 'badge', badgeKey: LovesAChallenge.key },
    { key: AvoidsTheGreenStuff.key, type: 'badge', badgeKey: AvoidsTheGreenStuff.key },
  ],
}
