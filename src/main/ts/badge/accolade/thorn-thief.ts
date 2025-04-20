import { BadgeData } from 'coh-content-db'
import { SecondTreeOfThornsRespecificationTrial } from '../../mission/second-tree-of-thorns-respecification-trial'

export const ThornThief: BadgeData = {
  type: 'accolade',
  key: 'thorn-thief',
  setTitleId: [517],
  name: 'Thorn Thief',
  releaseDate: '2012-11-30',
  morality: 'villainous',
  badgeText: `You have stolen the power of the Nexus of Thorns with the knowledge from the demon Trepsarciel.`,
  effect: `Awards a character respecification.`,
  links: [
    { title: 'Thorn Thief Badge', href: 'https://homecoming.wiki/wiki/Thorn_Thief_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/thorn-thief.png',
  requirements: [
    { key: SecondTreeOfThornsRespecificationTrial.key, type: 'mission', missionKey: SecondTreeOfThornsRespecificationTrial.key },
  ],
}
