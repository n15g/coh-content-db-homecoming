import { BadgeData } from 'coh-content-db'
import { AmongTheGiants } from '../exploration/among-the-giants'
import { BabeInTheWoods } from '../exploration/babe-in-the-woods'
import { ForestOfStone } from '../exploration/forest-of-stone'
import { HeartOfTheHamidon } from '../exploration/heart-of-the-hamidon'
import { TheSoundOfThunder } from '../exploration/the-sound-of-thunder'
import { TheWoundedEarth } from '../exploration/the-wounded-earth'
import { TimeBandit } from '../exploration/time-bandit'
import { WildAtHeart } from '../exploration/wild-at-heart'

export const BusyBusyBee: BadgeData = {
  type: 'accolade',
  key: 'busy-busy-bee',
  setTitleId: [1888],
  name: 'Busy, Busy Bee',
  morality: 'heroic',
  badgeText: `You've obtained this Accolade by earning every Exploration badge within the Hive.`,
  links: [
    { title: 'Busy, Busy Bee Badge', href: 'https://homecoming.wiki/wiki/Busy%2C_Busy_Bee_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/hazard-acc.png',
  requirements: [
    { key: AmongTheGiants.key, type: 'badge', badgeKey: AmongTheGiants.key },
    { key: BabeInTheWoods.key, type: 'badge', badgeKey: BabeInTheWoods.key },
    { key: ForestOfStone.key, type: 'badge', badgeKey: ForestOfStone.key },
    { key: HeartOfTheHamidon.key, type: 'badge', badgeKey: HeartOfTheHamidon.key },
    { key: TheSoundOfThunder.key, type: 'badge', badgeKey: TheSoundOfThunder.key },
    { key: TheWoundedEarth.key, type: 'badge', badgeKey: TheWoundedEarth.key },
    { key: TimeBandit.key, type: 'badge', badgeKey: TimeBandit.key },
    { key: WildAtHeart.key, type: 'badge', badgeKey: WildAtHeart.key },
  ],
}
