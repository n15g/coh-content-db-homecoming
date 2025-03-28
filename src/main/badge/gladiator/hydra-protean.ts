import { BadgeData } from 'coh-content-db'
import { Charmer } from '../accomplishment/charmer'

export const HydraProtean: BadgeData = {
  type: 'GLADIATOR',
  key: 'hydra-protean',
  setTitle: { id: 480 },
  name: [
    { value: 'Hydra Protean' },
  ],
  alignment: ['H'],
  badgeText: [
    { value: 'Mindless, yes. But yours to command.' },
  ],
  links: [
    { title: 'Hydra Protean Badge', href: 'https://homecoming.wiki/wiki/Hydra_Protean_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png' },
  ],
  requirements: [[
    { key: Charmer.key, type: 'BADGE', badgeKey: Charmer.key },
  ]],
}
