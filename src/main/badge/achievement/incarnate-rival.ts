import { BadgeData } from 'coh-content-db'

export const IncarnateRival: BadgeData = {
  type: 'ACHIEVEMENT',
  key: 'incarnate-rival',
  setTitle: { id: 2204 },
  name: [
    { value: 'Incarnate Rival' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    {
      value: 'You rescued Madame Bellerose from the forces of Dark Astoria. She eventually succumbed to '
        + 'Mot\'s will and attacked you, but came to her senses before it was too late. Did you choose to '
        + 'spare her life, or end it when she refused to pay you back?',
    },
  ],
  acquisition: 'Save Madame Bellerose at least once in Dark Astoria before your final meeting in Dream Doctor\'s story arc',
  links: [
    { title: 'Incarnate Rival Badge', href: 'https://homecoming.wiki/wiki/Incarnate_Rival_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/da-zone.png' },
  ],
}
