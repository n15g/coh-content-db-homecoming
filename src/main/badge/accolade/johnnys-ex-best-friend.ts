import { BadgeData, mapLink } from 'coh-content-db'
import { StMartial } from '../../map/st-martial'
import { DeucesWild } from '../exploration/deuces-wild'
import { Stonekeeper } from '../exploration/stonekeeper'
import { CamelSnot } from '../exploration/camel-snot'
import { DeadMansTree } from '../exploration/dead-mans-tree'
import { InfamousRubble } from '../exploration/infamous-rubble'
import { Showstopper } from '../exploration/showstopper'
import { Paroled } from '../exploration/paroled'
import { SocialWorker } from '../exploration/social-worker'

export const JohnnysExBestFriend: BadgeData = {
  type: 'ACCOLADE',
  key: 'johnnys-ex-best-friend',
  setTitle: { id: 1509 },
  name: [
    { alignment: 'H', value: 'Johnny\'s Ex-Best Friend' },
    { alignment: 'V', sex: 'M', value: 'Johnny\'s Go To Guy' },
    { alignment: 'V', sex: 'F', value: 'Johnny\'s Go To Gal' },
  ],
  alignment: ['V'],
  badgeText: [
    { value: `You've obtained this Accolade by earning every Exploration badge within St. Martial.` },
  ],
  notes: `Visit all exploration badges in ${mapLink(StMartial)}`,
  links: [
    { title: 'Johnny\'s Ex-Best Friend Badge', href: 'https://homecoming.wiki/wiki/Johnny%27s_Ex-Best_Friend_Badge' },
    { title: 'Johnny\'s Go To Guy Badge', href: 'https://homecoming.wiki/wiki/Johnny%27s_Go_To_Guy_Badge' },
    { title: 'Johnny\'s Go To Gal Badge', href: 'https://homecoming.wiki/wiki/Johnny%27s_Go_To_Gal_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/explore-acc-v.png' },
  ],
  requirements: [[
    { key: DeucesWild.key, type: 'BADGE', badgeKey: DeucesWild.key },
    { key: Paroled.key, type: 'BADGE', badgeKey: Paroled.key },
    { key: Stonekeeper.key, type: 'BADGE', badgeKey: Stonekeeper.key },
    { key: CamelSnot.key, type: 'BADGE', badgeKey: CamelSnot.key },
    { key: DeadMansTree.key, type: 'BADGE', badgeKey: DeadMansTree.key },
    { key: SocialWorker.key, type: 'BADGE', badgeKey: SocialWorker.key },
    { key: InfamousRubble.key, type: 'BADGE', badgeKey: InfamousRubble.key },
    { key: Showstopper.key, type: 'BADGE', badgeKey: Showstopper.key },
  ]],
}
