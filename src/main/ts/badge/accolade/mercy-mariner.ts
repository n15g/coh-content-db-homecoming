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
  type: 'accolade',
  key: 'mercy-mariner',
  setTitleId: [1486],
  name: 'Mercy Mariner',
  releaseDate: '2012-11-30',
  morality: 'villainous',
  badgeText: `You've obtained this Accolade by earning every Exploration badge within Mercy Island.`,
  links: [
    { title: 'Mercy Mariner Badge', href: 'https://homecoming.wiki/wiki/Mercy_Mariner_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/explore-acc-v.png',
  requirements: [
    { key: Cesspool.key, type: 'badge', badgeKey: Cesspool.key },
    { key: SnakeCharmer.key, type: 'badge', badgeKey: SnakeCharmer.key },
    { key: Chum.key, type: 'badge', badgeKey: Chum.key },
    { key: Fortified.key, type: 'badge', badgeKey: Fortified.key },
    { key: TheNextBigThing.key, type: 'badge', badgeKey: TheNextBigThing.key },
    { key: Widower.key, type: 'badge', badgeKey: Widower.key },
    { key: FirstRule.key, type: 'badge', badgeKey: FirstRule.key },
    { key: TikiFan.key, type: 'badge', badgeKey: TikiFan.key },
  ],
}
