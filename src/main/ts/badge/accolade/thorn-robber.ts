import { BadgeData } from 'coh-content-db'
import { FirstTreeOfThornsRespecificationTrial } from '../../mission/first-tree-of-thorns-respecification-trial'

export const ThornRobber: BadgeData = {
  type: 'accolade',
  key: 'thorn-robber',
  setTitleId: [516],
  name: 'Thorn Robber',
  releaseDate: '2012-11-30',
  morality: 'villainous',
  badgeText: `You have stolen the power of the Nexus of Thorns with the knowledge from the demon Sparcetriel.`,
  effect: `Awards a character respecification.`,
  links: [
    { title: 'Thorn Robber Badge', href: 'https://homecoming.wiki/wiki/Thorn_Robber_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/thorn-robber.png',
  requirements: [
    { key: FirstTreeOfThornsRespecificationTrial.key, type: 'mission', missionKey: FirstTreeOfThornsRespecificationTrial.key },
  ],
}
