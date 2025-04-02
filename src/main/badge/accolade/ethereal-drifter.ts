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
  type: 'ACCOLADE',
  key: 'ethereal-drifter',
  setTitle: { id: 2234 },
  name: 'Ethereal Drifter',
  alignment: ['H', 'V', 'P'],
  badgeText: `You've obtained this Accolade by earning every Exploration badge within Night Ward`,
  links: [
    { title: 'Ethereal Drifter Badge', href: 'https://homecoming.wiki/wiki/Ethereal_Drifter_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/explore-acc-p.png',
  requirements: [
    { key: NocturnalPilgrim.key, type: 'BADGE', badgeKey: NocturnalPilgrim.key },
    { key: HappyCamper.key, type: 'BADGE', badgeKey: HappyCamper.key },
    { key: HouseHunter.key, type: 'BADGE', badgeKey: HouseHunter.key },
    { key: AbandonedSoul.key, type: 'BADGE', badgeKey: AbandonedSoul.key },
    { key: DeadButDreaming.key, type: 'BADGE', badgeKey: DeadButDreaming.key },
    { key: FollowTheLight.key, type: 'BADGE', badgeKey: FollowTheLight.key },
    { key: Monolithic.key, type: 'BADGE', badgeKey: Monolithic.key },
    { key: Stargazer.key, type: 'BADGE', badgeKey: Stargazer.key },
  ],
}
