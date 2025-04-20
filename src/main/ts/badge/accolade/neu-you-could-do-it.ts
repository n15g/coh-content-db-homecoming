import { BadgeData } from 'coh-content-db'
import { BingeEater } from '../exploration/binge-eater'
import { Cluttered } from '../exploration/cluttered'
import { DrinkEnriche } from '../exploration/drink-enriche'
import { GradeF } from '../exploration/grade-f'
import { KeepingTheLightsOn } from '../exploration/keeping-the-lights-on'
import { ReadyForAnything } from '../exploration/ready-for-anything'
import { Nailbiter } from '../exploration/nailbiter'
import { TheNewBoss } from '../exploration/the-new-boss'

export const NeuYouCouldDoIt: BadgeData = {
  type: 'accolade',
  key: 'neu-you-could-do-it',
  setTitleId: [1655],
  name: 'Neu You Could Do It',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: `You've obtained this Accolade by earning every Exploration badge within Neutropolis's Underground.`,
  links: [
    { title: 'Neu You Could Do It Badge', href: 'https://homecoming.wiki/wiki/Neu_You_Could_Do_It_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/explore-acc-p.png',
  requirements: [
    { key: BingeEater.key, type: 'badge', badgeKey: BingeEater.key },
    { key: Cluttered.key, type: 'badge', badgeKey: Cluttered.key },
    { key: DrinkEnriche.key, type: 'badge', badgeKey: DrinkEnriche.key },
    { key: GradeF.key, type: 'badge', badgeKey: GradeF.key },
    { key: KeepingTheLightsOn.key, type: 'badge', badgeKey: KeepingTheLightsOn.key },
    { key: ReadyForAnything.key, type: 'badge', badgeKey: ReadyForAnything.key },
    { key: Nailbiter.key, type: 'badge', badgeKey: Nailbiter.key },
    { key: TheNewBoss.key, type: 'badge', badgeKey: TheNewBoss.key },
  ],
}
