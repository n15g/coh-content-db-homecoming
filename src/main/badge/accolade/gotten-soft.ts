import { BadgeData } from 'coh-content-db'
import { BadLuck } from '../accomplishment/bad-luck'
import { TheUnbrokenSpirit } from '../achievement/the-unbroken-spirit'
import { FreakOfNature } from '../exploration/freak-of-nature'
import { Gangbuster } from '../defeat/gangbuster'
import { LockedAndLoaded } from '../exploration/locked-and-loaded'
import { SpiderSmasher } from '../defeat/spider-smasher'
import { Technofreak } from '../history/technofreak'

export const GottenSoft: BadgeData = {
  type: 'ACCOLADE',
  key: 'gotten-soft',
  setTitle: { id: 535 },
  name: [
    { alignment: 'H', value: 'Gotten Soft' },
    { alignment: 'V', value: 'High Pain Threshold' },
  ],
  alignment: ['V'],
  badgeText: [
    { alignment: 'H', value: `You once had a incredibly High Pain Threshold, but it seems you've grown a little soft after coming to Paragon City.` },
    { alignment: 'V', value: `You've got an incredibly High Pain Threshold, an aftereffect of which is that your Hit Points are 10% greater than normal.` },
  ],
  notes: `Awards +10% Max Health`,
  links: [
    { title: 'Gotten Soft Badge', href: 'https://homecoming.wiki/wiki/Gotten_Soft_Badge' },
    { title: 'High Pain Threshold Badge', href: 'https://homecoming.wiki/wiki/High_Pain_Threshold_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/gotten-soft.png' },
  ],
  effect: `+10% Max Health`,
  partials: [
    { key: BadLuck.key, type: 'BADGE', badgeKey: BadLuck.key },
    { key: TheUnbrokenSpirit.key, type: 'BADGE', badgeKey: TheUnbrokenSpirit.key },
    { key: FreakOfNature.key, type: 'BADGE', badgeKey: FreakOfNature.key },
    { key: Gangbuster.key, type: 'BADGE', badgeKey: Gangbuster.key },
    { key: LockedAndLoaded.key, type: 'BADGE', badgeKey: LockedAndLoaded.key },
    { key: SpiderSmasher.key, type: 'BADGE', badgeKey: SpiderSmasher.key },
    { key: Technofreak.key, type: 'BADGE', badgeKey: Technofreak.key },
  ],
}
