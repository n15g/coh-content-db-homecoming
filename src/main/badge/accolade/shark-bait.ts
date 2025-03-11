import { BadgeData } from 'coh-content-db'

export const SharkBait: BadgeData = {
  type: 'ACCOLADE',
  key: 'shark-bait',
  setTitle: { id: 615 },
  name: [
    { alignment: 'H', value: 'Shark Bait' },
    { alignment: 'V', value: 'Bloodletter' },
  ],
  alignment: ['V'],
  badgeText: [
    { alignment: 'H', value: `Captain Mako once called you an ally. Now he calls you a snack.` },
    { alignment: 'V', value: `You're deadly and cold-blooded. Captain Mako appreciates that.` },
  ],
  acquisition: `Complete Captain Mako's patron story arc`,
  notes: `Completing the patron story arc 'Killer Instinct' from Captain Mako in Grandville unlocks the Leviathan Mastery patron power pool as well as awarding this badge.`,
  links: [
    { title: 'Shark Bait Badge', href: 'https://homecoming.wiki/wiki/Shark_Bait_Badge' },
    { title: 'Bloodletter Badge', href: 'https://homecoming.wiki/wiki/Bloodletter_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/shark-bait.png' },
  ],
}
