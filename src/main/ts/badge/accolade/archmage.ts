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
  type: 'accolade',
  key: 'archmage',
  setTitleId: [167],
  name: 'Archmage',
  morality: 'heroic',
  badgeText: [
    {
      alignment: 'hero', value: `Your research into the arcane, coupled with your experience in fighting magical foes, has unlocked heretofore unknown magics within you, earning you the title of Archmage.
You have learned a spell of protection because of this.`,
    },
    {
      alignment: 'villain',
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
    { key: Banisher.key, type: 'badge', badgeKey: Banisher.key },
    { key: DarkMystic.key, type: 'badge', badgeKey: DarkMystic.key },
    { key: FaultlessMystic.key, type: 'badge', badgeKey: FaultlessMystic.key },
    { key: Illusionist.key, type: 'badge', badgeKey: Illusionist.key },
    { key: Mystic.key, type: 'badge', badgeKey: Mystic.key },
    { key: MysticKing.key, type: 'badge', badgeKey: MysticKing.key },
    { key: SoulBinder.key, type: 'badge', badgeKey: SoulBinder.key },
    { key: Tracer.key, type: 'badge', badgeKey: Tracer.key },
  ],
}
