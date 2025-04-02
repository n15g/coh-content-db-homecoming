import { BadgeData } from 'coh-content-db'
import { Trepsarciel } from '../../contact/trepsarciel'

export const ThornThief: BadgeData = {
  type: 'ACCOLADE',
  key: 'thorn-thief',
  setTitle: { id: 517 },
  name: [
    { value: 'Thorn Thief' },
  ],
  alignment: ['V'],
  badgeText: [
    { value: `You have stolen the power of the Nexus of Thorns with the knowledge from the demon Trepsarciel.` },
  ],
  effect: `Awards a character respecification.`,
  links: [
    { title: 'Thorn Thief Badge', href: 'https://homecoming.wiki/wiki/Thorn_Thief_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/thorn-thief.png' },
  ],
  requirements: [
    { key: 'second-tree-of-thorns-respecification-trial', type: 'TASK_FORCE', missionName: 'Second Tree of Thorns Respecification Trial', contactKey: Trepsarciel.key },
  ],
}
