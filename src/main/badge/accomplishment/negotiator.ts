import { BadgeData } from 'coh-content-db'

export const Negotiator: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'negotiator',
  setTitle: { id: 71 },
  name: [
    { value: 'Negotiator' },
  ],
  alignment: ['H'],
  badgeText: [
    { value: 'You were instrumental in stopping a war between the Clockwork and the Skulls.' },
  ],
  acquisition: 'Complete the Get the Clockwork out of the warehouse before the Skulls get involved mission from Tony Kord, Paula Dempsey, or Maurice Feldon',
  links: [
    { title: 'Negotiator Badge', href: 'https://homecoming.wiki/wiki/Negotiator_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/negotiator.png' },
  ],
}
