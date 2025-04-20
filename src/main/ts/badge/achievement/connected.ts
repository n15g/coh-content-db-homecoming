import { BadgeData, contactLink } from 'coh-content-db'
import { VincentRoss } from '../../contact/vincent-ross'

export const Connected: BadgeData = {
  type: 'achievement',
  key: 'connected',
  setTitleId: [1896],
  name: 'Connected',
  releaseDate: '2012-11-30',
  morality: 'villainous',
  badgeText: `You've worked together with a contact in Sharkhead on the side while investigating the secrets of the Blood Coral.`,
  acquisition: `Work with one of the helping contacts in the story arc from ${contactLink(VincentRoss)}.`,
  links: [
    { title: 'Connected Badge', href: 'https://homecoming.wiki/wiki/Connected_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/connected.png',
}
