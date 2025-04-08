import { BadgeData } from 'coh-content-db'
import { Sparcetriel } from '../../contact/sparcetriel'

export const ThornRobber: BadgeData = {
  type: 'accolade',
  key: 'thorn-robber',
  setTitleId: [516],
  name: 'Thorn Robber',
  morality: 'villainous',
  badgeText: `You have stolen the power of the Nexus of Thorns with the knowledge from the demon Sparcetriel.`,
  effect: `Awards a character respecification.`,
  links: [
    { title: 'Thorn Robber Badge', href: 'https://homecoming.wiki/wiki/Thorn_Robber_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/thorn-robber.png',
  requirements: [
    { key: 'first-tree-of-thorns-respecification-trial', type: 'TASK_FORCE', missionName: 'First Tree of Thorns Respecification Trial', contactKey: Sparcetriel.key },
  ],
}
