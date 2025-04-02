import { BadgeData } from 'coh-content-db'

export const InterfaceUnlocked: BadgeData = {
  type: 'ACCOLADE',
  key: 'interface-unlocked',
  setTitle: { id: 1392 },
  name: 'Interface Unlocked',
  alignment: ['H', 'V', 'P'],
  badgeText: `You unlocked your Interface Incarnate slot allowing you to create powerful new abilities that can be slotted there.`,
  acquisition: `Unlock the Interface Incarnate slot.`,
  notes: `Unlock the Interface Incarnate slot by earning Incarnate Experience through normal play.`,
  links: [
    { title: 'Interface Unlocked Badge', href: 'https://homecoming.wiki/wiki/Interface_Unlocked_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/interface-unlocked.png',
}
