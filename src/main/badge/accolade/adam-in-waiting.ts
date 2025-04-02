import { BadgeData } from 'coh-content-db'
import { CallOfNature } from '../exploration/call-of-nature'
import { CreyFish } from '../exploration/crey-fish'
import { HiveMind } from '../exploration/hive-mind'
import { NaturalLaw } from '../exploration/natural-law'
import { NaturalSelection } from '../exploration/natural-selection'
import { NaturesWrath } from '../exploration/natures-wrath'
import { TheDevouringEarthAbides } from '../exploration/the-devouring-earth-abides'
import { Unspoiled } from '../exploration/unspoiled'

export const AdamInWaiting: BadgeData = {
  type: 'ACCOLADE',
  key: 'adam-in-waiting',
  setTitle: { id: 1887 },
  name: [
    { sex: 'M', value: 'Adam in Waiting' },
    { sex: 'F', value: 'Eve in Waiting' },
  ],
  alignment: ['H'],
  badgeText: `You've obtained this Accolade by earning every Exploration badge within Eden.`,
  links: [
    { title: 'Adam in Waiting Badge', href: 'https://homecoming.wiki/wiki/Adam_in_Waiting_Badge' },
    { title: 'Eve in Waiting Badge', href: 'https://homecoming.wiki/wiki/Eve_in_Waiting_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/hazard-acc.png',
  requirements: [
    { key: CallOfNature.key, type: 'BADGE', badgeKey: CallOfNature.key },
    { key: CreyFish.key, type: 'BADGE', badgeKey: CreyFish.key },
    { key: HiveMind.key, type: 'BADGE', badgeKey: HiveMind.key },
    { key: NaturalLaw.key, type: 'BADGE', badgeKey: NaturalLaw.key },
    { key: NaturalSelection.key, type: 'BADGE', badgeKey: NaturalSelection.key },
    { key: NaturesWrath.key, type: 'BADGE', badgeKey: NaturesWrath.key },
    { key: TheDevouringEarthAbides.key, type: 'BADGE', badgeKey: TheDevouringEarthAbides.key },
    { key: Unspoiled.key, type: 'BADGE', badgeKey: Unspoiled.key },
  ],
}
