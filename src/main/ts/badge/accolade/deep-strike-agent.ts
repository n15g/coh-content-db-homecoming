import { BadgeData } from 'coh-content-db'
import { BinderOfBeasts } from '../accomplishment/binder-of-beasts'
import { Leviathan } from '../accomplishment/leviathan'
import { PirateHunter } from '../accomplishment/pirate-hunter'
import { CrystalKeeper } from '../accomplishment/crystal-keeper'
import { GoldStandard } from '../accomplishment/gold-standard'

export const DeepStrikeAgent: BadgeData = {
  type: 'accolade',
  key: 'deep-strike-agent',
  setTitleId: [2542],
  name: [
    { alignment: 'hero', value: 'Deep Strike Agent' },
    { alignment: 'villain', value: 'Strike Force Commander' },
  ],
  releaseDate: '2024-11-19',
  morality: 'villainous',
  badgeText: [
    {
      alignment: 'hero', value: `You have successfully taken part in many of the most impactful operations and Strike Forces executed by Arachnos and their 'Destined Ones'.
You can break free from many effects out of sheer spite, due to your remarkable tenacity.`,
    },
    {
      alignment: 'villain', value: `You successfully infiltrated the most impactful operations and Strike Forces executed by Arachnos and their 'Destined Ones'.
You can break free from many effects out of sheer spite.`,
    },
  ],
  effect: `Awards the Sheer Willpower power.`,
  links: [
    { title: 'Deep Strike Agent Badge', href: 'https://homecoming.wiki/wiki/Deep_Strike_Agent_Badge' },
    { title: 'Strike Force Commander Badge', href: 'https://homecoming.wiki/wiki/Strike_Force_Commander_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/deep-strike-agent.png',
  requirements: [
    { key: BinderOfBeasts.key, type: 'badge', badgeKey: BinderOfBeasts.key },
    { key: Leviathan.key, type: 'badge', badgeKey: Leviathan.key },
    { key: PirateHunter.key, type: 'badge', badgeKey: PirateHunter.key },
    { key: CrystalKeeper.key, type: 'badge', badgeKey: CrystalKeeper.key },
    { key: GoldStandard.key, type: 'badge', badgeKey: GoldStandard.key },
  ],
}
