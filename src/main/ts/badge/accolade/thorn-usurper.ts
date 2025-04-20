import { BadgeData } from 'coh-content-db'
import { ThirdTreeOfThornsRespecificationTrial } from '../../mission/third-tree-of-thorns-respecification-trial'

export const ThornUsurper: BadgeData = {
  type: 'accolade',
  key: 'thorn-usurper',
  setTitleId: [518],
  name: 'Thorn Usurper',
  releaseDate: '2012-11-30',
  morality: 'villainous',
  badgeText: `You have stolen the power of the Nexus of Thorns with the knowledge from the demon Ractespriel.`,
  effect: `Awards a character respecification.`,
  links: [
    { title: 'Thorn Usurper Badge', href: 'https://homecoming.wiki/wiki/Thorn_Usurper_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/thorn-usurper.png',
  requirements: [
    { key: ThirdTreeOfThornsRespecificationTrial.key, type: 'mission', missionKey: ThirdTreeOfThornsRespecificationTrial.key },
  ],
}
