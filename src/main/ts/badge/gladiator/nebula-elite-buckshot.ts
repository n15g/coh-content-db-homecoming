import { BadgeData } from 'coh-content-db'
import { ProtectorOfInnocents } from '../achievement/protector-of-innocents'

export const NebulaEliteBuckshot: BadgeData = {
  type: 'gladiator',
  key: 'nebula-elite-buckshot',
  setTitleId: [491],
  name: 'Nebula Elite Buckshot',
  releaseDate: '2012-11-30',
  morality: 'heroic',
  badgeText: 'These Council will make good gladiators.',
  links: [
    { title: 'Nebula Elite Buckshot Badge', href: 'https://homecoming.wiki/wiki/Nebula_Elite_Buckshot_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png',
  requirements: [
    { key: ProtectorOfInnocents.key, type: 'badge', badgeKey: ProtectorOfInnocents.key },
  ],
}
