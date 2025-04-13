import { BadgeData } from 'coh-content-db'
import { Charmer } from '../accomplishment/charmer'

export const HydraProtean: BadgeData = {
  type: 'gladiator',
  key: 'hydra-protean',
  setTitleId: [480],
  name: 'Hydra Protean',
  morality: 'heroic',
  badgeText: 'Mindless, yes. But yours to command.',
  links: [
    { title: 'Hydra Protean Badge', href: 'https://homecoming.wiki/wiki/Hydra_Protean_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png',
  requirements: [
    { key: Charmer.key, type: 'badge', badgeKey: Charmer.key },
  ],
}
