import { BadgeData } from 'coh-content-db'
import { DeucesWild } from '../exploration/deuces-wild'
import { Stonekeeper } from '../exploration/stonekeeper'
import { CamelSnot } from '../exploration/camel-snot'
import { DeadMansTree } from '../exploration/dead-mans-tree'
import { InfamousRubble } from '../exploration/infamous-rubble'
import { Showstopper } from '../exploration/showstopper'
import { Paroled } from '../exploration/paroled'
import { SocialWorker } from '../exploration/social-worker'

export const JohnnysExBestFriend: BadgeData = {
  type: 'accolade',
  key: 'johnnys-ex-best-friend',
  setTitleId: [1509],
  name: [
    { alignment: 'hero', value: `Johnny's Ex-Best Friend` },
    { alignment: 'villain', sex: 'M', value: `Johnny's Go To Guy` },
    { alignment: 'villain', sex: 'F', value: `Johnny's Go To Gal` },
  ],
  releaseDate: '2012-11-30',
  morality: 'villainous',
  badgeText: `You've obtained this Accolade by earning every Exploration badge within St. Martial.`,
  links: [
    { title: `Johnny's Ex-Best Friend Badge`, href: 'https://homecoming.wiki/wiki/Johnny%27s_Ex-Best_Friend_Badge' },
    { title: `Johnny's Go To Guy Badge`, href: 'https://homecoming.wiki/wiki/Johnny%27s_Go_To_Guy_Badge' },
    { title: `Johnny's Go To Gal Badge`, href: 'https://homecoming.wiki/wiki/Johnny%27s_Go_To_Gal_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/explore-acc-v.png',
  requirements: [
    { key: DeucesWild.key, type: 'badge', badgeKey: DeucesWild.key },
    { key: Paroled.key, type: 'badge', badgeKey: Paroled.key },
    { key: Stonekeeper.key, type: 'badge', badgeKey: Stonekeeper.key },
    { key: CamelSnot.key, type: 'badge', badgeKey: CamelSnot.key },
    { key: DeadMansTree.key, type: 'badge', badgeKey: DeadMansTree.key },
    { key: SocialWorker.key, type: 'badge', badgeKey: SocialWorker.key },
    { key: InfamousRubble.key, type: 'badge', badgeKey: InfamousRubble.key },
    { key: Showstopper.key, type: 'badge', badgeKey: Showstopper.key },
  ],
}
