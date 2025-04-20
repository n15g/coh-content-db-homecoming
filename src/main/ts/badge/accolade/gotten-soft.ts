import { BadgeData } from 'coh-content-db'
import { BadLuck } from '../accomplishment/bad-luck'
import { TheUnbrokenSpirit } from '../achievement/the-unbroken-spirit'
import { FreakOfNature } from '../exploration/freak-of-nature'
import { Gangbuster } from '../defeat/gangbuster'
import { LockedAndLoaded } from '../exploration/locked-and-loaded'
import { SpiderSmasher } from '../defeat/spider-smasher'
import { Technofreak } from '../history/technofreak'

export const GottenSoft: BadgeData = {
  type: 'accolade',
  key: 'gotten-soft',
  setTitleId: [535],
  name: [
    { alignment: 'hero', value: 'Gotten Soft' },
    { alignment: 'villain', value: 'High Pain Threshold' },
  ],
  releaseDate: '2012-11-30',
  morality: 'villainous',
  badgeText: [
    { alignment: 'hero', value: `You once had a incredibly High Pain Threshold, but it seems you've grown a little soft after coming to Paragon City.` },
    { alignment: 'villain', value: `You've got an incredibly High Pain Threshold, an aftereffect of which is that your Hit Points are 10% greater than normal.` },
  ],
  effect: 'Awards +10% Max Health.',
  links: [
    { title: 'Gotten Soft Badge', href: 'https://homecoming.wiki/wiki/Gotten_Soft_Badge' },
    { title: 'High Pain Threshold Badge', href: 'https://homecoming.wiki/wiki/High_Pain_Threshold_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/gotten-soft.png',
  requirements: [
    { key: BadLuck.key, type: 'badge', badgeKey: BadLuck.key },
    { key: TheUnbrokenSpirit.key, type: 'badge', badgeKey: TheUnbrokenSpirit.key },
    { key: FreakOfNature.key, type: 'badge', badgeKey: FreakOfNature.key },
    { key: Gangbuster.key, type: 'badge', badgeKey: Gangbuster.key },
    { key: LockedAndLoaded.key, type: 'badge', badgeKey: LockedAndLoaded.key },
    { key: SpiderSmasher.key, type: 'badge', badgeKey: SpiderSmasher.key },
    { key: Technofreak.key, type: 'badge', badgeKey: Technofreak.key },
  ],
}
