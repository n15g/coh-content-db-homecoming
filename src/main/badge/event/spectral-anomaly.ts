import { BadgeData } from 'coh-content-db'

export const SpectralAnomaly: BadgeData = {
  type: 'event',
  key: 'spectral-anomaly',
  setTitleId: [2504],
  name: 'Spectral Anomaly',
  morality: 'all',
  badgeText: `You have defeated 5 spectral werewolves, lycanthropic beasts who embraced undeath in order to become one with the night eternal.`,
  acquisition: `Defeat 5 Spectral Werewolves during the Halloween event.`,
  effect: `Awards 2 prismatic aether particles.`,
  links: [
    { title: 'Spectral Anomaly Badge', href: 'https://homecoming.wiki/wiki/Spectral_Anomaly_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/event/spectral-anomaly.png',
}
