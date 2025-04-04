import { BadgeData } from 'coh-content-db'
import { DearlyDeparted } from '../exploration/dearly-departed'
import { EyeOfTheVortex } from '../exploration/eye-of-the-vortex'
import { FearlessInsurgent } from '../exploration/fearless-insurgent'
import { ShellShocked } from '../exploration/shell-shocked'
import { MayhemsProdigal } from '../exploration/mayhems-prodigal'
import { ShadowWalker } from '../exploration/shadow-walker'
import { VengeanceSeeker } from '../exploration/vengeance-seeker'
import { WitnessForTheFallen } from '../exploration/witness-for-the-fallen'

export const PrimeWarden: BadgeData = {
  type: 'accolade',
  key: 'prime-warden',
  setTitleId: [2056],
  name: 'Prime Warden',
  morality: 'all',
  badgeText: `You've obtained this Accolade by earning every Exploration badge within First Ward.`,
  links: [
    { title: 'Prime Warden Badge', href: 'https://homecoming.wiki/wiki/Prime_Warden_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/explore-acc-p.png',
  requirements: [
    { key: DearlyDeparted.key, type: 'badge', badgeKey: DearlyDeparted.key },
    { key: EyeOfTheVortex.key, type: 'badge', badgeKey: EyeOfTheVortex.key },
    { key: FearlessInsurgent.key, type: 'badge', badgeKey: FearlessInsurgent.key },
    { key: ShellShocked.key, type: 'badge', badgeKey: ShellShocked.key },
    { key: MayhemsProdigal.key, type: 'badge', badgeKey: MayhemsProdigal.key },
    { key: ShadowWalker.key, type: 'badge', badgeKey: ShadowWalker.key },
    { key: VengeanceSeeker.key, type: 'badge', badgeKey: VengeanceSeeker.key },
    { key: WitnessForTheFallen.key, type: 'badge', badgeKey: WitnessForTheFallen.key },
  ],
}
