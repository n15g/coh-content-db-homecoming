import { BadgeData } from 'coh-content-db'
import { DimensionalWarder } from '../defeat/dimensional-warder'
import { Multidimensional } from '../exploration/multidimensional'
import { Scholastic } from '../history/scholastic'
import { Shrouded } from '../exploration/shrouded'

export const PortalJockey: BadgeData = {
  type: 'accolade',
  key: 'portal-jockey',
  setTitleId: [165],
  name: 'Portal Jockey',
  morality: 'heroic',
  badgeText: [
    { alignment: 'hero', value: `Your efforts to help Portal Corporation explore the vast multiverse have earned you the title of Portal Jockey. This perk comes with +5 Endurance and +5% Hit Points.` },
    { alignment: 'villain', value: `Portal Corporation has disavowed your many efforts on their behalf. The energies you had received from those other worlds no longer seems to flow.` },
  ],
  effect: `Awards +5% Max Health and +5 Max Endurance.`,
  links: [
    { title: 'Portal Jockey Badge', href: 'https://homecoming.wiki/wiki/Portal_Jockey_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/portal-jockey.png',
  requirements: [
    { key: DimensionalWarder.key, type: 'badge', badgeKey: DimensionalWarder.key },
    { key: Multidimensional.key, type: 'badge', badgeKey: Multidimensional.key },
    { key: Scholastic.key, type: 'badge', badgeKey: Scholastic.key },
    { key: Shrouded.key, type: 'badge', badgeKey: Shrouded.key },
  ],
}
