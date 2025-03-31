import { BadgeData } from 'coh-content-db'
import { Exterminator } from '../accomplishment/exterminator'
import { Pirate } from '../defeat/pirate'
import { PrimalInstinct } from '../exploration/primal-instinct'
import { HammerDown } from '../defeat/hammer-down'
import { Swashbuckler } from '../history/swashbuckler'
import { Triumphant } from '../exploration/triumphant'
import { Adamant } from '../achievement/adamant'

export const BornInBattle: BadgeData = {
  type: 'ACCOLADE',
  key: 'born-in-battle',
  setTitle: { id: 534 },
  name: [
    { value: 'Born in Battle' },
  ],
  alignment: ['V'],
  badgeText: [
    { alignment: 'H', value: `You may have proven yourself as Born in Battle, but in Paragon City other virtues matter more.` },
    { alignment: 'V', value: `You've proven yourself as Born in Battle, adding 5% to both your Endurance and Hit Point totals.` },
  ],
  effect: 'Awards +5% Max Health and +5 Max Endurance',
  links: [
    { title: 'Born in Battle Badge', href: 'https://homecoming.wiki/wiki/Born_in_Battle_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/born-in-battle.png' },
  ],
  requirements: [[
    { key: Exterminator.key, type: 'BADGE', badgeKey: Exterminator.key },
    { key: Pirate.key, type: 'BADGE', badgeKey: Pirate.key },
    { key: PrimalInstinct.key, type: 'BADGE', badgeKey: PrimalInstinct.key },
    { key: HammerDown.key, type: 'BADGE', badgeKey: HammerDown.key },
    { key: Swashbuckler.key, type: 'BADGE', badgeKey: Swashbuckler.key },
    { key: Triumphant.key, type: 'BADGE', badgeKey: Triumphant.key },
    { key: Adamant.key, type: 'BADGE', badgeKey: Adamant.key },
  ]],
}
