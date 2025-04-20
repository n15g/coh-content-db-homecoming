import { BadgeData } from 'coh-content-db'
import { Exterminator } from '../accomplishment/exterminator'
import { Pirate } from '../defeat/pirate'
import { PrimalInstinct } from '../exploration/primal-instinct'
import { HammerDown } from '../defeat/hammer-down'
import { Swashbuckler } from '../history/swashbuckler'
import { Triumphant } from '../exploration/triumphant'
import { Adamant } from '../achievement/adamant'

export const BornInBattle: BadgeData = {
  type: 'accolade',
  key: 'born-in-battle',
  setTitleId: [534],
  name: 'Born in Battle',
  releaseDate: '2012-11-30',
  morality: 'villainous',
  badgeText: [
    { alignment: 'hero', value: `You may have proven yourself as Born in Battle, but in Paragon City other virtues matter more.` },
    { alignment: 'villain', value: `You've proven yourself as Born in Battle, adding 5% to both your Endurance and Hit Point totals.` },
  ],
  effect: 'Awards +5% Max Health and +5 Max Endurance.',
  links: [
    { title: 'Born in Battle Badge', href: 'https://homecoming.wiki/wiki/Born_in_Battle_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/born-in-battle.png',
  requirements: [
    { key: Exterminator.key, type: 'badge', badgeKey: Exterminator.key },
    { key: Pirate.key, type: 'badge', badgeKey: Pirate.key },
    { key: PrimalInstinct.key, type: 'badge', badgeKey: PrimalInstinct.key },
    { key: HammerDown.key, type: 'badge', badgeKey: HammerDown.key },
    { key: Swashbuckler.key, type: 'badge', badgeKey: Swashbuckler.key },
    { key: Triumphant.key, type: 'badge', badgeKey: Triumphant.key },
    { key: Adamant.key, type: 'badge', badgeKey: Adamant.key },
  ],
}
