import { BadgeData } from 'coh-content-db'
import { NocturnalPilgrim } from '../exploration/nocturnal-pilgrim'
import { HappyCamper } from '../exploration/happy-camper'
import { HouseHunter } from '../exploration/house-hunter'
import { AbandonedSoul } from '../exploration/abandoned-soul'
import { DeadButDreaming } from '../exploration/dead-but-dreaming'
import { FollowTheLight } from '../exploration/follow-the-light'
import { Monolithic } from '../exploration/monolithic'
import { Stargazer } from '../exploration/stargazer'

export const EtherealDrifter: BadgeData = {
  type: 'accolade',
  key: 'ethereal-drifter',
  setTitleId: [2234],
  name: 'Ethereal Drifter',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: `You've obtained this Accolade by earning every Exploration badge within Night Ward`,
  links: [
    { title: 'Ethereal Drifter Badge', href: 'https://homecoming.wiki/wiki/Ethereal_Drifter_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/explore-acc-p.png',
  requirements: [
    { key: NocturnalPilgrim.key, type: 'badge', badgeKey: NocturnalPilgrim.key },
    { key: HappyCamper.key, type: 'badge', badgeKey: HappyCamper.key },
    { key: HouseHunter.key, type: 'badge', badgeKey: HouseHunter.key },
    { key: AbandonedSoul.key, type: 'badge', badgeKey: AbandonedSoul.key },
    { key: DeadButDreaming.key, type: 'badge', badgeKey: DeadButDreaming.key },
    { key: FollowTheLight.key, type: 'badge', badgeKey: FollowTheLight.key },
    { key: Monolithic.key, type: 'badge', badgeKey: Monolithic.key },
    { key: Stargazer.key, type: 'badge', badgeKey: Stargazer.key },
  ],
}
