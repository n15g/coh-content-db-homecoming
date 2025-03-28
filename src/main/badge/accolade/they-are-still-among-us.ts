import { BadgeData, mapLink } from 'coh-content-db'
import { RiktiWarZone } from '../../map/rikti-war-zone'
import { VanguardOperative } from '../exploration/vanguard-operative'
import { Trespasser } from '../exploration/trespasser'
import { Lifesaver } from '../exploration/lifesaver'
import { BaseJumper } from '../exploration/base-jumper'
import { Homewrecker } from '../exploration/homewrecker'
import { Luscious } from '../exploration/luscious'
import { JunkyardDog } from '../exploration/junkyard-dog'
import { Unabashed } from '../exploration/unabashed'

export const TheyAreStillAmongUs: BadgeData = {
  type: 'ACCOLADE',
  key: 'they-are-still-among-us',
  setTitle: { id: 2331 },
  name: [
    { value: 'They Are Still Among Us' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: `You've obtained this Accolade by earning every Exploration badge in the Rikti War Zone.` },
  ],
  notes: `Visit all exploration badges in ${mapLink(RiktiWarZone)}`,
  links: [
    { title: 'They Are Still Among Us Badge', href: 'https://homecoming.wiki/wiki/They_Are_Still_Among_Us_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/hazard-acc.png' },
  ],
  requirements: [[
    { key: VanguardOperative.key, type: 'BADGE', badgeKey: VanguardOperative.key },
    { key: Trespasser.key, type: 'BADGE', badgeKey: Trespasser.key },
    { key: Lifesaver.key, type: 'BADGE', badgeKey: Lifesaver.key },
    { key: BaseJumper.key, type: 'BADGE', badgeKey: BaseJumper.key },
    { key: Homewrecker.key, type: 'BADGE', badgeKey: Homewrecker.key },
    { key: Luscious.key, type: 'BADGE', badgeKey: Luscious.key },
    { key: JunkyardDog.key, type: 'BADGE', badgeKey: JunkyardDog.key },
    { key: Unabashed.key, type: 'BADGE', badgeKey: Unabashed.key },
  ]],
}
