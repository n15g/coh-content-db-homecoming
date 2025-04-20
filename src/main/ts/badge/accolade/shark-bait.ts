import { BadgeData } from 'coh-content-db'
import { KillerInstinct } from '../../mission/killer-instinct'

export const SharkBait: BadgeData = {
  type: 'accolade',
  key: 'shark-bait',
  setTitleId: [615],
  name: [
    { alignment: 'hero', value: 'Shark Bait' },
    { alignment: 'villain', value: 'Bloodletter' },
  ],
  releaseDate: '2012-11-30',
  morality: 'villainous',
  badgeText: [
    { alignment: 'hero', value: `Captain Mako once called you an ally. Now he calls you a snack.` },
    { alignment: 'villain', value: `You're deadly and cold-blooded. Captain Mako appreciates that.` },
  ],
  effect: `Awards the Leviathan Mastery patron power.`,
  links: [
    { title: 'Shark Bait Badge', href: 'https://homecoming.wiki/wiki/Shark_Bait_Badge' },
    { title: 'Bloodletter Badge', href: 'https://homecoming.wiki/wiki/Bloodletter_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/shark-bait.png',
  requirements: [
    { key: KillerInstinct.key, type: 'mission', missionKey: KillerInstinct.key },
  ],
}
