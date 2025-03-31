import { BadgeData } from 'coh-content-db'
import { BinderOfBeasts } from '../accomplishment/binder-of-beasts'
import { Leviathan } from '../accomplishment/leviathan'
import { PirateHunter } from '../accomplishment/pirate-hunter'
import { CrystalKeeper } from '../accomplishment/crystal-keeper'
import { GoldStandard } from '../accomplishment/gold-standard'

export const DeepStrikeAgent: BadgeData = {
  type: 'ACCOLADE',
  key: 'deep-strike-agent',
  setTitle: { id: 2542 },
  name: [
    { alignment: 'H', value: 'Deep Strike Agent' },
    { alignment: 'V', value: 'Strike Force Commander' },
  ],
  alignment: ['V'],
  badgeText: [
    {
      alignment: 'H', value: `You have successfully taken part in many of the most impactful operations and Strike Forces executed by Arachnos and their 'Destined Ones'.
You can break free from many effects out of sheer spite, due to your remarkable tenacity.`,
    },
    {
      alignment: 'V', value: `You successfully infiltrated the most impactful operations and Strike Forces executed by Arachnos and their 'Destined Ones'.
You can break free from many effects out of sheer spite.`,
    },
  ],
  effect: `Awards the Sheer Willpower power.`,
  links: [
    { title: 'Deep Strike Agent Badge', href: 'https://homecoming.wiki/wiki/Deep_Strike_Agent_Badge' },
    { title: 'Strike Force Commander Badge', href: 'https://homecoming.wiki/wiki/Strike_Force_Commander_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/deep-strike-agent.png' },
  ],
  requirements: [[
    { key: BinderOfBeasts.key, type: 'BADGE', badgeKey: BinderOfBeasts.key },
    { key: Leviathan.key, type: 'BADGE', badgeKey: Leviathan.key },
    { key: PirateHunter.key, type: 'BADGE', badgeKey: PirateHunter.key },
    { key: CrystalKeeper.key, type: 'BADGE', badgeKey: CrystalKeeper.key },
    { key: GoldStandard.key, type: 'BADGE', badgeKey: GoldStandard.key },
  ]],
}
