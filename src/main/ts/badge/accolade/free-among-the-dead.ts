import { BadgeData } from 'coh-content-db'
import { FollysVictim } from '../exploration/follys-victim'
import { PalaceOfStoneLeaves } from '../exploration/palace-of-stone-leaves'
import { AuspiceAvernus } from '../exploration/auspice-avernus'
import { WalkerOnTheProfaneAscent } from '../exploration/walker-on-the-profane-ascent'
import { WitnessOfOaths } from '../exploration/witness-of-oaths'
import { LifeOutOfDeath } from '../exploration/life-out-of-death'
import { OfThingsUnclean } from '../exploration/of-things-unclean'
import { DeathsHeadSupplicant } from '../exploration/deaths-head-supplicant'

export const FreeAmongTheDead: BadgeData = {
  type: 'accolade',
  key: 'free-among-the-dead',
  setTitleId: [2187],
  name: 'Free Among the Dead',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: `You've obtained this Accolade by earning every Exploration badge within Dark Astoria.`,
  links: [
    { title: 'Free Among the Dead Badge', href: 'https://homecoming.wiki/wiki/Free_Among_the_Dead_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/hazard-acc.png',
  requirements: [
    { key: FollysVictim.key, type: 'badge', badgeKey: FollysVictim.key },
    { key: PalaceOfStoneLeaves.key, type: 'badge', badgeKey: PalaceOfStoneLeaves.key },
    { key: AuspiceAvernus.key, type: 'badge', badgeKey: AuspiceAvernus.key },
    { key: DeathsHeadSupplicant.key, type: 'badge', badgeKey: DeathsHeadSupplicant.key },
    { key: WalkerOnTheProfaneAscent.key, type: 'badge', badgeKey: WalkerOnTheProfaneAscent.key },
    { key: WitnessOfOaths.key, type: 'badge', badgeKey: WitnessOfOaths.key },
    { key: LifeOutOfDeath.key, type: 'badge', badgeKey: LifeOutOfDeath.key },
    { key: OfThingsUnclean.key, type: 'badge', badgeKey: OfThingsUnclean.key },
  ],
}
