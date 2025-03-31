import { BadgeData } from 'coh-content-db'
import { Cesspool } from '../exploration/cesspool'
import { SnakeCharmer } from '../exploration/snake-charmer'
import { Chum } from '../exploration/chum'
import { Fortified } from '../exploration/fortified'
import { TheNextBigThing } from '../exploration/the-next-big-thing'
import { FirstRule } from '../exploration/first-rule'
import { TikiFan } from '../exploration/tiki-fan'
import { Widower } from '../exploration/widower'

export const MercyMariner: BadgeData = {
  type: 'ACCOLADE',
  key: 'mercy-mariner',
  setTitle: { id: 1486 },
  name: [
    { value: 'Mercy Mariner' },
  ],
  alignment: ['V'],
  badgeText: [
    { value: `You've obtained this Accolade by earning every Exploration badge within Mercy Island.` },
  ],
  links: [
    { title: 'Mercy Mariner Badge', href: 'https://homecoming.wiki/wiki/Mercy_Mariner_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/explore-acc-v.png' },
  ],
  requirements: [[
    { key: Cesspool.key, type: 'BADGE', badgeKey: Cesspool.key },
    { key: SnakeCharmer.key, type: 'BADGE', badgeKey: SnakeCharmer.key },
    { key: Chum.key, type: 'BADGE', badgeKey: Chum.key },
    { key: Fortified.key, type: 'BADGE', badgeKey: Fortified.key },
    { key: TheNextBigThing.key, type: 'BADGE', badgeKey: TheNextBigThing.key },
    { key: Widower.key, type: 'BADGE', badgeKey: Widower.key },
    { key: FirstRule.key, type: 'BADGE', badgeKey: FirstRule.key },
    { key: TikiFan.key, type: 'BADGE', badgeKey: TikiFan.key },
  ]],
}
