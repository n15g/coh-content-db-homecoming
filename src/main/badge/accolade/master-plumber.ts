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
  type: 'accolade',
  key: 'master-plumber',
  setTitleId: [1884],
  name: 'Master Plumber',
  morality: 'heroic',
  badgeText: `You've obtained this Accolade by earning every Exploration badge within the Abandoned Sewer Network.`,
  links: [
    { title: 'Master Plumber Badge', href: 'https://homecoming.wiki/wiki/Master_Plumber_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/hazard-acc.png',
  requirements: [
    { key: BoomtownRefugee.key, type: 'badge', badgeKey: BoomtownRefugee.key },
    { key: FromBeneathYou.key, type: 'badge', badgeKey: FromBeneathYou.key },
    { key: HadesAspirant.key, type: 'badge', badgeKey: HadesAspirant.key },
    { key: LivingDark.key, type: 'badge', badgeKey: LivingDark.key },
    { key: PersephoneSupplicant.key, type: 'badge', badgeKey: PersephoneSupplicant.key },
    { key: SecretOfTheCity.key, type: 'badge', badgeKey: SecretOfTheCity.key },
    { key: SprawlSurvivor.key, type: 'badge', badgeKey: SprawlSurvivor.key },
    { key: TheUnderlord.key, type: 'badge', badgeKey: TheUnderlord.key },
  ],
}
