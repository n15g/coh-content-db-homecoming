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
  type: 'accolade',
  key: 'adam-in-waiting',
  setTitleId: [1887],
  name: [
    { sex: 'M', value: 'Adam in Waiting' },
    { sex: 'F', value: 'Eve in Waiting' },
  ],
  morality: 'heroic',
  badgeText: `You've obtained this Accolade by earning every Exploration badge within Eden.`,
  links: [
    { title: 'Adam in Waiting Badge', href: 'https://homecoming.wiki/wiki/Adam_in_Waiting_Badge' },
    { title: 'Eve in Waiting Badge', href: 'https://homecoming.wiki/wiki/Eve_in_Waiting_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/hazard-acc.png',
  requirements: [
    { key: CallOfNature.key, type: 'badge', badgeKey: CallOfNature.key },
    { key: CreyFish.key, type: 'badge', badgeKey: CreyFish.key },
    { key: HiveMind.key, type: 'badge', badgeKey: HiveMind.key },
    { key: NaturalLaw.key, type: 'badge', badgeKey: NaturalLaw.key },
    { key: NaturalSelection.key, type: 'badge', badgeKey: NaturalSelection.key },
    { key: NaturesWrath.key, type: 'badge', badgeKey: NaturesWrath.key },
    { key: TheDevouringEarthAbides.key, type: 'badge', badgeKey: TheDevouringEarthAbides.key },
    { key: Unspoiled.key, type: 'badge', badgeKey: Unspoiled.key },
  ],
}
