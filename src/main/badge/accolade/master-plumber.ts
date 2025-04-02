import { BadgeData } from 'coh-content-db'
import { BoomtownRefugee } from '../exploration/boomtown-refugee'
import { FromBeneathYou } from '../exploration/from-beneath-you'
import { HadesAspirant } from '../exploration/hades-aspirant'
import { LivingDark } from '../exploration/living-dark'
import { PersephoneSupplicant } from '../exploration/persephone-supplicant'
import { SecretOfTheCity } from '../exploration/secret-of-the-city'
import { SprawlSurvivor } from '../exploration/sprawl-survivor'
import { TheUnderlord } from '../exploration/the-underlord'

export const MasterPlumber: BadgeData = {
  type: 'ACCOLADE',
  key: 'master-plumber',
  setTitle: { id: 1884 },
  name: 'Master Plumber',
  alignment: ['H'],
  badgeText: `You've obtained this Accolade by earning every Exploration badge within the Abandoned Sewer Network.`,
  links: [
    { title: 'Master Plumber Badge', href: 'https://homecoming.wiki/wiki/Master_Plumber_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/hazard-acc.png',
  requirements: [
    { key: BoomtownRefugee.key, type: 'BADGE', badgeKey: BoomtownRefugee.key },
    { key: FromBeneathYou.key, type: 'BADGE', badgeKey: FromBeneathYou.key },
    { key: HadesAspirant.key, type: 'BADGE', badgeKey: HadesAspirant.key },
    { key: LivingDark.key, type: 'BADGE', badgeKey: LivingDark.key },
    { key: PersephoneSupplicant.key, type: 'BADGE', badgeKey: PersephoneSupplicant.key },
    { key: SecretOfTheCity.key, type: 'BADGE', badgeKey: SecretOfTheCity.key },
    { key: SprawlSurvivor.key, type: 'BADGE', badgeKey: SprawlSurvivor.key },
    { key: TheUnderlord.key, type: 'BADGE', badgeKey: TheUnderlord.key },
  ],
}
