import { BadgeData } from 'coh-content-db'

export const FirebaseZuluSecurityDetail: BadgeData = {
  type: 'achievement',
  key: 'firebase-zulu-security-detail',
  setTitleId: [206],
  name: [
    { alignment: 'hero', value: 'Firebase Zulu Security Detail' },
    { alignment: 'villain', value: 'Firebase Zulu Deserter' },
  ],
  morality: 'heroic',
  badgeText: [
    { alignment: 'hero', value: `You have logged enough time in the Shadow Shard to be made a part of Firebase Zulu's security detail.` },
    { alignment: 'villain', value: `You once were part of Firebase Zulu's security detail, but have since abandoned them to the ravages of the Shadow Shard.` },
  ],
  acquisition: 'Spend 3 minutes in the Shadow Shard.',
  links: [
    { title: 'Firebase Zulu Security Detail Badge', href: 'https://homecoming.wiki/wiki/Firebase_Zulu_Security_Detail_Badge' },
    { title: 'Firebase Zulu Deserter Badge', href: 'https://homecoming.wiki/wiki/Firebase_Zulu_Deserter_Badge' },
  ],
  icon: [
    { alignment: 'hero', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/time-h.png' },
    { alignment: 'villain', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/time-v.png' },
  ],
}
