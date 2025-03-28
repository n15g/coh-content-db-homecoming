import { BadgeData, mapLink } from 'coh-content-db'
import { FirstWard } from '../../map/first-ward'
import { DearlyDeparted } from '../exploration/dearly-departed'
import { EyeOfTheVortex } from '../exploration/eye-of-the-vortex'
import { FearlessInsurgent } from '../exploration/fearless-insurgent'
import { ShellShocked } from '../exploration/shell-shocked'
import { MayhemsProdigal } from '../exploration/mayhems-prodigal'
import { ShadowWalker } from '../exploration/shadow-walker'
import { VengeanceSeeker } from '../exploration/vengeance-seeker'
import { WitnessForTheFallen } from '../exploration/witness-for-the-fallen'

export const PrimeWarden: BadgeData = {
  type: 'ACCOLADE',
  key: 'prime-warden',
  setTitle: { id: 2056 },
  name: [
    { value: 'Prime Warden' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: `You've obtained this Accolade by earning every Exploration badge within First Ward.` },
  ],
  notes: `Visit all exploration badges in ${mapLink(FirstWard)}`,
  links: [
    { title: 'Prime Warden Badge', href: 'https://homecoming.wiki/wiki/Prime_Warden_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/explore-acc-p.png' },
  ],
  requirements: [[
    { key: DearlyDeparted.key, type: 'BADGE', badgeKey: DearlyDeparted.key },
    { key: EyeOfTheVortex.key, type: 'BADGE', badgeKey: EyeOfTheVortex.key },
    { key: FearlessInsurgent.key, type: 'BADGE', badgeKey: FearlessInsurgent.key },
    { key: ShellShocked.key, type: 'BADGE', badgeKey: ShellShocked.key },
    { key: MayhemsProdigal.key, type: 'BADGE', badgeKey: MayhemsProdigal.key },
    { key: ShadowWalker.key, type: 'BADGE', badgeKey: ShadowWalker.key },
    { key: VengeanceSeeker.key, type: 'BADGE', badgeKey: VengeanceSeeker.key },
    { key: WitnessForTheFallen.key, type: 'BADGE', badgeKey: WitnessForTheFallen.key },
  ]],
}
