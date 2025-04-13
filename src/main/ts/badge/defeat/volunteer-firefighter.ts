import { BadgeData } from 'coh-content-db'

export const VolunteerFirefighter: BadgeData = {
  type: 'defeat',
  key: 'volunteer-firefighter',
  setTitleId: [211],
  name: [
    { alignment: 'hero', value: 'Volunteer Firefighter' },
    { alignment: 'villain', value: 'Fire Bane' },
  ],
  morality: 'heroic',
  badgeText: [
    { alignment: 'hero', value: 'You have helped save the people of Paragon City from burning!' },
    { alignment: 'villain', value: `You put a stop to the Hellions' fun with fire.` },
  ],
  acquisition: 'Defeat 10 Hellion Arsonists during a Hellion Arson event.',
  links: [
    { title: 'Volunteer Firefighter Badge', href: 'https://homecoming.wiki/wiki/Volunteer_Firefighter_Badge' },
    { title: 'Fire Bane Badge', href: 'https://homecoming.wiki/wiki/Fire_Bane_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/firefighter.png',
}
