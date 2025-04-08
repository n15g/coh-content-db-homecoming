import { BadgeData, zoneLink } from 'coh-content-db'
import { Ouroboros } from '../../zone/ouroboros'
import { VincentRoss } from '../../contact/vincent-ross'

export const KeeperOfCoralLore: BadgeData = {
  type: 'accomplishment',
  key: 'keeper-of-coral-lore',
  setTitleId: [1894],
  name: 'Keeper of Coral Lore',
  morality: 'villainous',
  badgeText: `You've discovered the secret to the Blood Coral and the ancient power of the slumbering Leviathan.`,
  notes: `To get this badge in ${zoneLink(Ouroboros)}, a villain can select the "Old Friends, New Enemies, and New Opportunities" entry with number 19.02 in the 25-29 level range.`,
  links: [
    { title: 'Keeper of Coral Lore Badge', href: 'https://homecoming.wiki/wiki/Keeper_of_Coral_Lore_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/keeper-of-coral-lore.png',
  requirements: [
    { key: 'old-friends-new-enemies-and-new-opportunities', type: 'ARC', missionName: 'Old Friends, New Enemies, and New Opportunities', contactKey: VincentRoss.key },
  ],
}
