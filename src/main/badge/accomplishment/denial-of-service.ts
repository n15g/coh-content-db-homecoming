import { BadgeData } from 'coh-content-db'

export const DenialOfService: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'denial-of-service',
  setTitle: { id: 1421 },
  name: 'Denial of Service',
  alignment: ['H', 'V', 'P'],
  badgeText: 'You crept a bit too close to the danger zone and got burned.',
  acquisition: 'Attempt to penetrate the sonic barrier surrounding the Praetorian zones.',
  links: [
    { title: 'Denial of Service Badge', href: 'https://homecoming.wiki/wiki/Denial_of_Service_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/denial-of-service.png',
}
