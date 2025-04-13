import { BadgeData } from 'coh-content-db'
import { AstoriasLastStand } from '../exploration/astorias-last-stand'
import { CairnWarder } from '../exploration/cairn-warder'
import { DarkMystic } from '../exploration/dark-mystic'
import { PhantomRadio } from '../exploration/phantom-radio'
import { SeekerOfTheUnknown } from '../exploration/seeker-of-the-unknown'
import { TheSleeperBelow } from '../exploration/the-sleeper-below'
import { TooDarkPark } from '../exploration/too-dark-park'
import { WhispererOnWitchburnHill } from '../exploration/whisperer-on-witchburn-hill'

export const ALightInDarkAstoria: BadgeData = {
  type: 'accolade',
  key: 'a-light-in-dark-astorias',
  setTitleId: [1878],
  name: 'A Light in Dark Astoria',
  morality: 'heroic',
  badgeText: `You've obtained this Accolade by earning every Exploration badge within Dark Astoria.`,
  links: [
    { title: 'A Light in Dark Astoria Badge', href: 'https://homecoming.wiki/wiki/A_Light_in_Dark_Astoria_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/hazard-acc.png',
  requirements: [
    { key: AstoriasLastStand.key, type: 'badge', badgeKey: AstoriasLastStand.key },
    { key: CairnWarder.key, type: 'badge', badgeKey: CairnWarder.key },
    { key: DarkMystic.key, type: 'badge', badgeKey: DarkMystic.key },
    { key: PhantomRadio.key, type: 'badge', badgeKey: PhantomRadio.key },
    { key: SeekerOfTheUnknown.key, type: 'badge', badgeKey: SeekerOfTheUnknown.key },
    { key: TheSleeperBelow.key, type: 'badge', badgeKey: TheSleeperBelow.key },
    { key: TooDarkPark.key, type: 'badge', badgeKey: TooDarkPark.key },
    { key: WhispererOnWitchburnHill.key, type: 'badge', badgeKey: WhispererOnWitchburnHill.key },
  ],
}
