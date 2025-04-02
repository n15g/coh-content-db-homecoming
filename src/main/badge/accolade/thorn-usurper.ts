import { BadgeData } from 'coh-content-db'
import { Ractespriel } from '../../contact/ractespriel'

export const ThornUsurper: BadgeData = {
  type: 'ACCOLADE',
  key: 'thorn-usurper',
  setTitle: { id: 518 },
  name: [
    { value: 'Thorn Usurper' },
  ],
  alignment: ['V'],
  badgeText: [
    { value: `You have stolen the power of the Nexus of Thorns with the knowledge from the demon Ractespriel.` },
  ],
  effect: `Awards a character respecification.`,
  links: [
    { title: 'Thorn Usurper Badge', href: 'https://homecoming.wiki/wiki/Thorn_Usurper_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/thorn-usurper.png' },
  ],
  requirements: [
    { key: 'third-tree-of-thorns-respecification-trial', type: 'TASK_FORCE', missionName: 'Third Tree of Thorns Respecification Trial', contactKey: Ractespriel.key },
  ],
}
