import { BadgeData } from 'coh-content-db'
import { ForgedByHellfire } from '../exploration/forged-by-hellfire'
import { Lorekeeper } from '../history/lorekeeper'
import { Overlord } from '../exploration/overlord'
import { SoulTaker } from '../accomplishment/soul-taker'
import { Coldblooded } from '../defeat/coldblooded'

export const Exorcised: BadgeData = {
  type: 'accolade',
  key: 'exorcised',
  setTitleId: [536],
  name: [
    { alignment: 'hero', value: 'Exorcised' },
    { alignment: 'villain', value: 'Demonic' },
  ],
  releaseDate: '2012-11-30',
  morality: 'villainous',
  badgeText: [
    { alignment: 'hero', value: `The goodness you've let into your heart appears to have banished the spirit of a demon which once resided within.` },
    {
      alignment: 'villain',
      value: `The spirit of a demon resides within you. Bringing it to the surface of your mind can make you highly resistant to all types of damage for a short time.
You mustn't let the demon out too long, or you just may lose your mortal soul, forever.`,
    },
  ],
  notes: `Awards the Demonic Aura power.`,
  links: [
    { title: 'Exorcised Badge', href: 'https://homecoming.wiki/wiki/Exorcised_Badge' },
    { title: 'Demonic Badge', href: 'https://homecoming.wiki/wiki/Demonic_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/exorcised.png',
  requirements: [
    { key: Coldblooded.key, type: 'badge', badgeKey: Coldblooded.key },
    { key: ForgedByHellfire.key, type: 'badge', badgeKey: ForgedByHellfire.key },
    { key: Lorekeeper.key, type: 'badge', badgeKey: Lorekeeper.key },
    { key: Overlord.key, type: 'badge', badgeKey: Overlord.key },
    { key: SoulTaker.key, type: 'badge', badgeKey: SoulTaker.key },
  ],
}
