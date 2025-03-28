import { BadgeData, zoneLink } from 'coh-content-db'
import { Neutropolis } from '../../zone/neutropolis'
import { Airlift } from '../exploration/airlift'
import { DontDrinkIt } from '../exploration/dont-drink-it'
import { EyesToTheFuture } from '../exploration/eyes-to-the-future'
import { MoarPower } from '../exploration/moar-power'
import { Longshoreman } from '../exploration/longshoreman'
import { Stockpiling } from '../exploration/stockpiling'
import { StuffOfLife } from '../exploration/stuff-of-life'
import { UrbanRenewal } from '../exploration/urban-renewal'

export const ANeuMan: BadgeData = {
  type: 'ACCOLADE',
  key: 'a-neu-man',
  setTitle: { id: 1654 },
  name: [
    { sex: 'M', value: 'A Neu Man' },
    { sex: 'F', value: 'A Neu Woman' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: `You've obtained this Accolade by earning every Exploration badge within Neutropolis.` },
  ],
  notes: `Visit all exploration badges in ${zoneLink(Neutropolis)}`,
  links: [
    { title: 'A Neu Man Badge', href: 'https://homecoming.wiki/wiki/A_Neu_Man_Badge' },
    { title: 'A Neu Woman Badge', href: 'https://homecoming.wiki/wiki/A_Neu_Woman_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/explore-acc-p.png' },
  ],
  requirements: [[
    { key: Airlift.key, type: 'BADGE', badgeKey: Airlift.key },
    { key: DontDrinkIt.key, type: 'BADGE', badgeKey: DontDrinkIt.key },
    { key: EyesToTheFuture.key, type: 'BADGE', badgeKey: EyesToTheFuture.key },
    { key: MoarPower.key, type: 'BADGE', badgeKey: MoarPower.key },
    { key: Longshoreman.key, type: 'BADGE', badgeKey: Longshoreman.key },
    { key: Stockpiling.key, type: 'BADGE', badgeKey: Stockpiling.key },
    { key: StuffOfLife.key, type: 'BADGE', badgeKey: StuffOfLife.key },
    { key: UrbanRenewal.key, type: 'BADGE', badgeKey: UrbanRenewal.key },
  ]],
}
