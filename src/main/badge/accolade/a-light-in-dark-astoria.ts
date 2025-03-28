import { BadgeData, mapLink } from 'coh-content-db'
import { EchoDarkAstoria } from '../../map/echo-dark-astoria'
import { AstoriasLastStand } from '../exploration/astorias-last-stand'
import { CairnWarder } from '../exploration/cairn-warder'
import { DarkMystic } from '../exploration/dark-mystic'
import { PhantomRadio } from '../exploration/phantom-radio'
import { SeekerOfTheUnknown } from '../exploration/seeker-of-the-unknown'
import { TheSleeperBelow } from '../exploration/the-sleeper-below'
import { TooDarkPark } from '../exploration/too-dark-park'
import { WhispererOnWitchburnHill } from '../exploration/whisperer-on-witchburn-hill'

export const ALightInDarkAstoria: BadgeData = {
  type: 'ACCOLADE',
  key: 'a-light-in-dark-astorias',
  setTitle: { id: 1878 },
  name: [
    { value: 'A Light in Dark Astoria' },
  ],
  alignment: ['H'],
  badgeText: [
    { value: `You've obtained this Accolade by earning every Exploration badge within Dark Astoria.` },
  ],
  notes: `Visit all exploration badges in ${mapLink(EchoDarkAstoria)}`,
  links: [
    { title: 'A Light in Dark Astoria Badge', href: 'https://homecoming.wiki/wiki/A_Light_in_Dark_Astoria_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/hazard-acc.png' },
  ],
  requirements: [[
    { key: AstoriasLastStand.key, type: 'BADGE', badgeKey: AstoriasLastStand.key },
    { key: CairnWarder.key, type: 'BADGE', badgeKey: CairnWarder.key },
    { key: DarkMystic.key, type: 'BADGE', badgeKey: DarkMystic.key },
    { key: PhantomRadio.key, type: 'BADGE', badgeKey: PhantomRadio.key },
    { key: SeekerOfTheUnknown.key, type: 'BADGE', badgeKey: SeekerOfTheUnknown.key },
    { key: TheSleeperBelow.key, type: 'BADGE', badgeKey: TheSleeperBelow.key },
    { key: TooDarkPark.key, type: 'BADGE', badgeKey: TooDarkPark.key },
    { key: WhispererOnWitchburnHill.key, type: 'BADGE', badgeKey: WhispererOnWitchburnHill.key },
  ]],
}
