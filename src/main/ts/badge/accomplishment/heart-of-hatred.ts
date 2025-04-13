import { BadgeData } from 'coh-content-db'
import { TheChoiceOfHopeSecondHalf } from '../../mission/the-choice-of-hope-second-half'

export const HeartOfHatred: BadgeData = {
  type: 'accomplishment',
  key: 'heart-of-hatred',
  setTitleId: [2193],
  name: 'Heart of Hatred',
  morality: 'all',
  badgeText: 'You fought against Mot, the essence of hatred, and managed to win, saving the world from being devoured whole by the creature.',
  links: [
    { title: 'Heart of Hatred Badge', href: 'https://homecoming.wiki/wiki/Heart_of_Hatred_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/da-arc.png',
  requirements: [
    { key: TheChoiceOfHopeSecondHalf.key, type: 'mission', missionKey: TheChoiceOfHopeSecondHalf.key },
  ],
}
