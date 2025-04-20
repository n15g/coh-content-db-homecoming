import { BadgeData } from 'coh-content-db'
import { OldFriendsNewEnemiesAndNewOpportunities } from '../../mission/old-friends-new-enemies-and-new-opportunities'

export const KeeperOfCoralLore: BadgeData = {
  type: 'accomplishment',
  key: 'keeper-of-coral-lore',
  setTitleId: [1894],
  name: 'Keeper of Coral Lore',
  releaseDate: '2012-11-30',
  morality: 'villainous',
  badgeText: `You've discovered the secret to the Blood Coral and the ancient power of the slumbering Leviathan.`,
  links: [
    { title: 'Keeper of Coral Lore Badge', href: 'https://homecoming.wiki/wiki/Keeper_of_Coral_Lore_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/keeper-of-coral-lore.png',
  requirements: [
    { key: OldFriendsNewEnemiesAndNewOpportunities.key, type: 'mission', missionKey: OldFriendsNewEnemiesAndNewOpportunities.key },
  ],
}
