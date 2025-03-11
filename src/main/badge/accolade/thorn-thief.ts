import { BadgeData } from 'coh-content-db'

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
  acquisition: `Complete the second Tree of Thorns Respecification Trial`,
  notes: `The second (level 34-43) Tree of Thorns Respecification Trial is available from Trepsarciel in Nerva Archipelago.`,
  links: [
    { title: 'Thorn Thief Badge', href: 'https://homecoming.wiki/wiki/Thorn_Thief_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/thorn-thief.png' },
  ],
}
