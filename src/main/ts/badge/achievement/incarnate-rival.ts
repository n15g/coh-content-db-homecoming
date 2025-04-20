import { BadgeData, contactLink, zoneLink } from 'coh-content-db'
import { DarkAstoria } from '../../zone/dark-astoria'
import { DreamDoctor } from '../../contact/dream-doctor'

export const IncarnateRival: BadgeData = {
  type: 'achievement',
  key: 'incarnate-rival',
  setTitleId: [2204],
  name: 'Incarnate Rival',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: `You rescued Madame Bellerose from the forces of Dark Astoria. She eventually succumbed to Mot's will and attacked you, but came to her senses before it was too late.
Did you choose to spare her life, or end it when she refused to pay you back?`,
  acquisition: `Save Madame Bellerose at least once in ${zoneLink(DarkAstoria)} before your final meeting in ${contactLink(DreamDoctor)}'s story arc.`,
  links: [
    { title: 'Incarnate Rival Badge', href: 'https://homecoming.wiki/wiki/Incarnate_Rival_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/da-zone.png',
}
