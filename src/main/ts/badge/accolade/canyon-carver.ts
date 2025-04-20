import { BadgeData } from 'coh-content-db'
import { SecretAdmirer } from '../exploration/secret-admirer'
import { HeroCorpsRecruit } from '../exploration/hero-corps-recruit'
import { NimbleMynx } from '../exploration/nimble-mynx'
import { BrightStar } from '../exploration/bright-star'
import { DanceLegend } from '../exploration/dance-legend'
import { Controversial } from '../exploration/controversial'
import { PetProject } from '../exploration/pet-project'
import { DirtyAttorney } from '../exploration/dirty-attorney'

export const CanyonCarver: BadgeData = {
  type: 'accolade',
  key: 'canyon-carver',
  setTitleId: [1534],
  name: 'Canyon Carver',
  releaseDate: '2012-11-30',
  morality: 'heroic',
  badgeText: `You've obtained this Accolade by earning every Exploration badge within Steel Canyon.`,
  links: [
    { title: 'Canyon Carver Badge', href: 'https://homecoming.wiki/wiki/Canyon_Carver_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/explore-acc-h.png',
  requirements: [
    { key: SecretAdmirer.key, type: 'badge', badgeKey: SecretAdmirer.key },
    { key: HeroCorpsRecruit.key, type: 'badge', badgeKey: HeroCorpsRecruit.key },
    { key: NimbleMynx.key, type: 'badge', badgeKey: NimbleMynx.key },
    { key: BrightStar.key, type: 'badge', badgeKey: BrightStar.key },
    { key: DanceLegend.key, type: 'badge', badgeKey: DanceLegend.key },
    { key: Controversial.key, type: 'badge', badgeKey: Controversial.key },
    { key: PetProject.key, type: 'badge', badgeKey: PetProject.key },
    { key: DirtyAttorney.key, type: 'badge', badgeKey: DirtyAttorney.key },
  ],
}
