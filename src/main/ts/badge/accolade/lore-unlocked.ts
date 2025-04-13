import { BadgeData } from 'coh-content-db'

export const LoreUnlocked: BadgeData = {
  type: 'accolade',
  key: 'lore-unlocked',
  setTitleId: [1393],
  name: 'Lore Unlocked',
  morality: 'all',
  badgeText: `You unlocked your Lore Incarnate slot allowing you to create powerful new abilities that can be slotted there.`,
  acquisition: `Unlock the Lore Incarnate slot.`,
  notes: `Unlock the Lore Incarnate slot by earning Incarnate Experience through normal play.`,
  links: [
    { title: 'Lore Unlocked Badge', href: 'https://homecoming.wiki/wiki/Lore_Unlocked_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/lore-unlocked.png',
}
