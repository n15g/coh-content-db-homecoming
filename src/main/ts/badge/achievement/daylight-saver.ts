import { BadgeData } from 'coh-content-db'

export const DaylightSaver: BadgeData = {
  type: 'achievement',
  key: 'daylight-saver',
  setTitleId: [2081],
  name: 'Daylight Saver',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: `Deep within the Minds of Mayhem, you came across the long-suffering Aurora Borealis, whose body and mind had been taken over by Shalice Tilman.
Separating the two was never going to be an easy task, but you did it while causing minimal risk to Aurora Borealis, delivering her from Tilman's torment with a minimum of suffering.`,
  acquisition: `Defeat Mother Mayhem without allowing Aurora Borealis' health to drop below 75%, and then complete the trial.`,
  links: [
    { title: 'Daylight Saver Badge', href: 'https://homecoming.wiki/wiki/Daylight_Saver_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/it-mom.png',
}
