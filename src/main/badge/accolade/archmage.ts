import { BadgeData } from 'coh-content-db'
import { Banisher } from '../defeat/banisher'
import { DarkMystic } from '../exploration/dark-mystic'
import { FaultlessMystic } from '../exploration/faultless-mystic'
import { Illusionist } from '../defeat/illusionist'
import { Mystic } from '../exploration/mystic'
import { MysticKing } from '../exploration/mystic-king'
import { SoulBinder } from '../defeat/soul-binder'
import { Tracer } from '../defeat/tracer'

export const Archmage: BadgeData = {
  type: 'ACCOLADE',
  key: 'archmage',
  setTitle: { id: 167 },
  name: 'Archmage',
  alignment: ['H'],
  badgeText: [
    {
      alignment: 'H', value: `Your research into the arcane, coupled with your experience in fighting magical foes, has unlocked heretofore unknown magics within you, earning you the title of Archmage.
You have learned a spell of protection because of this.`,
    },
    {
      alignment: 'V',
      value: `Your research into the arcane, coupled with your experience in fighting magical foes, has unlocked heretofore unknown magics within you, earning you the title of Archmage.
The associated spell of protection, which relies on a certain purity of spirit, is no longer useful to you.`,
    },
  ],
  effect: `Awards the Eye of the Magus power.`,
  links: [
    { title: 'Archmage Badge', href: 'https://homecoming.wiki/wiki/Archmage_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/archmage.png',
  requirements: [
    { key: Banisher.key, type: 'BADGE', badgeKey: Banisher.key },
    { key: DarkMystic.key, type: 'BADGE', badgeKey: DarkMystic.key },
    { key: FaultlessMystic.key, type: 'BADGE', badgeKey: FaultlessMystic.key },
    { key: Illusionist.key, type: 'BADGE', badgeKey: Illusionist.key },
    { key: Mystic.key, type: 'BADGE', badgeKey: Mystic.key },
    { key: MysticKing.key, type: 'BADGE', badgeKey: MysticKing.key },
    { key: SoulBinder.key, type: 'BADGE', badgeKey: SoulBinder.key },
    { key: Tracer.key, type: 'BADGE', badgeKey: Tracer.key },
  ],
}
