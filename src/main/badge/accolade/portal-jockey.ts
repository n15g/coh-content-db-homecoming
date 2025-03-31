import { BadgeData } from 'coh-content-db'
import { DimensionalWarder } from '../defeat/dimensional-warder'
import { Multidimensional } from '../exploration/multidimensional'
import { Scholastic } from '../history/scholastic'
import { Shrouded } from '../exploration/shrouded'

export const PortalJockey: BadgeData = {
  type: 'ACCOLADE',
  key: 'portal-jockey',
  setTitle: { id: 165 },
  name: [
    { value: 'Portal Jockey' },
  ],
  alignment: ['H'],
  badgeText: [
    { alignment: 'H', value: `Your efforts to help Portal Corporation explore the vast multiverse have earned you the title of Portal Jockey. This perk comes with +5 Endurance and +5% Hit Points.` },
    { alignment: 'V', value: `Portal Corporation has disavowed your many efforts on their behalf. The energies you had received from those other worlds no longer seems to flow.` },
  ],
  effect: `Awards +5% Max Health and +5 Max Endurance.`,
  links: [
    { title: 'Portal Jockey Badge', href: 'https://homecoming.wiki/wiki/Portal_Jockey_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/portal-jockey.png' },
  ],
  requirements: [[
    { key: DimensionalWarder.key, type: 'BADGE', badgeKey: DimensionalWarder.key },
    { key: Multidimensional.key, type: 'BADGE', badgeKey: Multidimensional.key },
    { key: Scholastic.key, type: 'BADGE', badgeKey: Scholastic.key },
    { key: Shrouded.key, type: 'BADGE', badgeKey: Shrouded.key },
  ]],
}
