import { BadgeData } from 'coh-content-db'

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
  acquisition: `Complete the third Tree of Thorns Respecification Trial`,
  notes: `The third (level 44-50) Tree of Thorns Respecification Trial is available from Ractespriel in Nerva Archipelago.`,
  links: [
    { title: 'Thorn Usurper Badge', href: 'https://homecoming.wiki/wiki/Thorn_Usurper_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/thorn-usurper.png' },
  ],
}
