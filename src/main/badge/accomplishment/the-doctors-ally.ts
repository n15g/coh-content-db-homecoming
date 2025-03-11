import { BadgeData } from 'coh-content-db'

export const TheDoctorsAlly: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'the-doctors-ally',
  setTitle: { id: 80 },
  name: [
    { value: 'The Doctor\'s Ally' },
  ],
  alignment: ['H'],
  badgeText: [
    { value: 'You have uncovered the fate of Doctor Friedkin.' },
  ],
  acquisition: 'Complete the Investigate the hacker known as The Doctor mission from Gordon Stacy',
  links: [
    { title: 'The Doctor\'s Ally Badge', href: 'https://homecoming.wiki/wiki/The_Doctor%27s_Ally_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/the-doctors-ally.png' },
  ],
}
