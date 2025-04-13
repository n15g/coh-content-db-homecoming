import { BadgeData } from 'coh-content-db'

export const EntrustedWithTheSecret: BadgeData = {
  type: 'ouroboros',
  key: 'entrusted-with-the-secret',
  setTitleId: [933],
  name: 'Entrusted with the Secret',
  morality: 'all',
  badgeText: 'You have been exposed to Time Travel and have been granted access to the Ouroboros Citadel. You can find the power to summon forth a portal there in your Temporary Powers tray.',
  acquisition: 'Complete a story arc that gives a time travel-related Souvenir, or obtain any time travel-related Badges.',
  notes: `This badge is rewarded to Heroes and Villains who have done one of the following:

* Earned any Time Travel related Badge.
* Earned any Time Travel related souvenir.
* Completed a Time Travel mission, including any mission via the Flashback system.

See the Paragon Wiki link for a detailed list of badges and missions that will grant this badge.`,
  effect: 'Awards the Ouroboros Portal power.',
  links: [
    { title: 'Entrusted with the Secret Badge', href: 'https://homecoming.wiki/wiki/Entrusted_with_the_Secret_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/entrusted-with-the-secret.png',
}
