import { BadgeData } from 'coh-content-db'

export const DestinyUnlocked: BadgeData = {
  type: 'ACCOLADE',
  key: 'destiny-unlocked',
  setTitle: { id: 1394 },
  name: 'Destiny Unlocked',
  alignment: ['H', 'V', 'P'],
  badgeText: `You unlocked your Destiny Incarnate slot allowing you to create powerful new abilities that can be slotted there.`,
  acquisition: `Unlock the Destiny Incarnate slot,`,
  notes: `Unlock the Destiny Incarnate slot by earning Incarnate Experience through normal play.`,
  links: [
    { title: 'Destiny Unlocked Badge', href: 'https://homecoming.wiki/wiki/Destiny_Unlocked_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/destiny-unlocked.png',
}
