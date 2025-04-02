import { BadgeData } from 'coh-content-db'
import { CaptainMako } from '../../contact/captain-mako'

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
  effect: `Awards the Leviathan Mastery patron power.`,
  links: [
    { title: 'Shark Bait Badge', href: 'https://homecoming.wiki/wiki/Shark_Bait_Badge' },
    { title: 'Bloodletter Badge', href: 'https://homecoming.wiki/wiki/Bloodletter_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/shark-bait.png' },
  ],
  requirements: [
    { key: 'killer-instinct', type: 'ARC', missionName: 'Killer Instinct', contactKey: CaptainMako.key },
  ],
}
