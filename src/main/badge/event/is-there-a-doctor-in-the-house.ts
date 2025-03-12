import { BadgeData } from 'coh-content-db'

export const IsThereADoctorInTheHouse: BadgeData = {
  type: 'EVENT',
  key: 'is-there-a-doctor-in-the-house',
  setTitle: { id: 2085 },
  name: [
    { value: 'Is There a Doctor in the House?' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: 'You braved the haunted mansion of Dr. Kane and defeated his Abomination!' },
  ],
  acquisition: 'Complete Dr. Kane\'s House of Horror during the Halloween event.',
  links: [
    { title: 'Is There a Doctor in the House? Badge', href: 'https://homecoming.wiki/wiki/Is_There_a_Doctor_in_the_House%3F_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/event/is-there-a-doctor-in-the-house.png' }],
}
