import { BadgeData } from 'coh-content-db'

export const HybridUnlocked: BadgeData = {
  type: 'ACCOLADE',
  key: 'hybrid-unlocked',
  setTitle: { id: 1395 },
  name: [
    { value: 'Hybrid Unlocked' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: `You unlocked your Hybrid Incarnate slot allowing you to create powerful new abilities that can be slotted there.` },
  ],
  acquisition: `Unlock the Hybrid Incarnate slot`,
  notes: `Unlock the Hybrid Incarnate slot by earning Incarnate Experience through normal play.`,
  links: [
    { title: 'Hybrid Unlocked Badge', href: 'https://homecoming.wiki/wiki/Hybrid_Unlocked_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/hybrid-unlocked.png' },
  ],
}
