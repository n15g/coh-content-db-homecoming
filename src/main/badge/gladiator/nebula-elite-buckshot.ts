import { BadgeData } from 'coh-content-db'
import { ProtectorOfInnocents } from '../achievement/protector-of-innocents'

export const NebulaEliteBuckshot: BadgeData = {
  type: 'gladiator',
  key: 'nebula-elite-buckshot',
  setTitleId: [491],
  name: [
    { value: 'Nebula Elite Buckshot' },
  ],
  morality: 'heroic',
  badgeText: [
    { value: 'These Council will make good gladiators.' },
  ],
  links: [
    { title: 'Nebula Elite Buckshot Badge', href: 'https://homecoming.wiki/wiki/Nebula_Elite_Buckshot_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png' },
  ],
  requirements: [
    { key: ProtectorOfInnocents.key, type: 'badge', badgeKey: ProtectorOfInnocents.key },
  ],
}
