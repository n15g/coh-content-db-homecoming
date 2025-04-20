import { BadgeData } from 'coh-content-db'
import { Airlift } from '../exploration/airlift'
import { DontDrinkIt } from '../exploration/dont-drink-it'
import { EyesToTheFuture } from '../exploration/eyes-to-the-future'
import { MoarPower } from '../exploration/moar-power'
import { Longshoreman } from '../exploration/longshoreman'
import { Stockpiling } from '../exploration/stockpiling'
import { StuffOfLife } from '../exploration/stuff-of-life'
import { UrbanRenewal } from '../exploration/urban-renewal'

export const ANeuMan: BadgeData = {
  type: 'accolade',
  key: 'a-neu-man',
  setTitleId: [1654],
  name: [
    { sex: 'M', value: 'A Neu Man' },
    { sex: 'F', value: 'A Neu Woman' },
  ],
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: `You've obtained this Accolade by earning every Exploration badge within Neutropolis.`,
  links: [
    { title: 'A Neu Man Badge', href: 'https://homecoming.wiki/wiki/A_Neu_Man_Badge' },
    { title: 'A Neu Woman Badge', href: 'https://homecoming.wiki/wiki/A_Neu_Woman_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/explore-acc-p.png',
  requirements: [
    { key: Airlift.key, type: 'badge', badgeKey: Airlift.key },
    { key: DontDrinkIt.key, type: 'badge', badgeKey: DontDrinkIt.key },
    { key: EyesToTheFuture.key, type: 'badge', badgeKey: EyesToTheFuture.key },
    { key: MoarPower.key, type: 'badge', badgeKey: MoarPower.key },
    { key: Longshoreman.key, type: 'badge', badgeKey: Longshoreman.key },
    { key: Stockpiling.key, type: 'badge', badgeKey: Stockpiling.key },
    { key: StuffOfLife.key, type: 'badge', badgeKey: StuffOfLife.key },
    { key: UrbanRenewal.key, type: 'badge', badgeKey: UrbanRenewal.key },
  ],
}
