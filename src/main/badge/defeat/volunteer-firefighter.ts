import { BadgeData } from 'coh-content-db'

export const VolunteerFirefighter: BadgeData = {
  type: 'DEFEAT',
  key: 'volunteer-firefighter',
  setTitle: { id: 211 },
  name: [
    { alignment: 'H', value: 'Volunteer Firefighter' },
    { alignment: 'V', value: 'Fire Bane' },
  ],
  alignment: ['H'],
  badgeText: [
    { alignment: 'H', value: 'You have helped save the people of Paragon City from burning!' },
    { alignment: 'V', value: 'You put a stop to the Hellions\' fun with fire.' },
  ],
  acquisition: 'Defeat 10 Hellion Arsonists during a Hellion Arson event',
  links: [
    { title: 'Volunteer Firefighter Badge', href: 'https://homecoming.wiki/wiki/Volunteer_Firefighter_Badge' },
    { title: 'Fire Bane Badge', href: 'https://homecoming.wiki/wiki/Fire_Bane_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/firefighter.png' },
  ],
}
