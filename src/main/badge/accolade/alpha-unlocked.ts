import { BadgeData } from 'coh-content-db'

export const AlphaUnlocked: BadgeData = {
  type: 'ACCOLADE',
  key: 'alpha-unlocked',
  setTitle: { id: 1390 },
  name: [
    { value: 'Alpha Unlocked' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: `You unlocked your Alpha Incarnate slot allowing you to create powerful new abilities that can be slotted there.` },
  ],
  acquisition: `Unlock the Alpha Incarnate slot`,
  notes: `Unlock the Alpha Incarnate slot by reaching level 50 and completing Mender Ramiel's story arc, or by earning Incarnate Experience through normal play.`,
  links: [
    { title: 'Alpha Unlocked Badge', href: 'https://homecoming.wiki/wiki/Alpha_Unlocked_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/alpha-unlocked.png' },
  ],
}
