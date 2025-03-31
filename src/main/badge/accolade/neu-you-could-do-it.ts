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
  type: 'ACCOLADE',
  key: 'neu-you-could-do-it',
  setTitle: { id: 1655 },
  name: [
    { value: 'Neu You Could Do It' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: `You've obtained this Accolade by earning every Exploration badge within Neutropolis's Underground.` },
  ],
  links: [
    { title: 'Neu You Could Do It Badge', href: 'https://homecoming.wiki/wiki/Neu_You_Could_Do_It_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/explore-acc-p.png' },
  ],
  requirements: [[
    { key: BingeEater.key, type: 'BADGE', badgeKey: BingeEater.key },
    { key: Cluttered.key, type: 'BADGE', badgeKey: Cluttered.key },
    { key: DrinkEnriche.key, type: 'BADGE', badgeKey: DrinkEnriche.key },
    { key: GradeF.key, type: 'BADGE', badgeKey: GradeF.key },
    { key: KeepingTheLightsOn.key, type: 'BADGE', badgeKey: KeepingTheLightsOn.key },
    { key: ReadyForAnything.key, type: 'BADGE', badgeKey: ReadyForAnything.key },
    { key: Nailbiter.key, type: 'BADGE', badgeKey: Nailbiter.key },
    { key: TheNewBoss.key, type: 'BADGE', badgeKey: TheNewBoss.key },
  ]],
}
