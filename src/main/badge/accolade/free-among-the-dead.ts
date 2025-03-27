import { BadgeData, mapLink } from 'coh-content-db'
import { DarkAstoria } from '../../map/dark-astoria'
import { FollysVictim } from '../exploration/follys-victim'
import { PalaceOfStoneLeaves } from '../exploration/palace-of-stone-leaves'
import { AuspiceAvernus } from '../exploration/auspice-avernus'
import { WalkerOnTheProfaneAscent } from '../exploration/walker-on-the-profane-ascent'
import { WitnessOfOaths } from '../exploration/witness-of-oaths'
import { LifeOutOfDeath } from '../exploration/life-out-of-death'
import { OfThingsUnclean } from '../exploration/of-things-unclean'
import { DeathsHeadSupplicant } from '../exploration/deaths-head-supplicant'

export const FreeAmongTheDead: BadgeData = {
  type: 'ACCOLADE',
  key: 'free-among-the-dead',
  setTitle: { id: 2187 },
  name: [
    { value: 'Free Among the Dead' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: `You've obtained this Accolade by earning every Exploration badge within Dark Astoria.` },
  ],
  notes: `Visit all exploration badges in ${mapLink(DarkAstoria)}`,
  links: [
    { title: 'Free Among the Dead Badge', href: 'https://homecoming.wiki/wiki/Free_Among_the_Dead_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/hazard-acc.png' },
  ],
  partials: [
    { key: FollysVictim.key, type: 'BADGE', badgeKey: FollysVictim.key },
    { key: PalaceOfStoneLeaves.key, type: 'BADGE', badgeKey: PalaceOfStoneLeaves.key },
    { key: AuspiceAvernus.key, type: 'BADGE', badgeKey: AuspiceAvernus.key },
    { key: DeathsHeadSupplicant.key, type: 'BADGE', badgeKey: DeathsHeadSupplicant.key },
    { key: WalkerOnTheProfaneAscent.key, type: 'BADGE', badgeKey: WalkerOnTheProfaneAscent.key },
    { key: WitnessOfOaths.key, type: 'BADGE', badgeKey: WitnessOfOaths.key },
    { key: LifeOutOfDeath.key, type: 'BADGE', badgeKey: LifeOutOfDeath.key },
    { key: OfThingsUnclean.key, type: 'BADGE', badgeKey: OfThingsUnclean.key },
  ],
}
