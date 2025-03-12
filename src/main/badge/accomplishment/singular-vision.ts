import { BadgeData } from 'coh-content-db'

export const SingularVision: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'singular-vision',
  setTitle: { id: 1588 },
  name: [
    { value: 'Singular Vision' },
  ],
  alignment: ['H'],
  badgeText: [
    {
      value: 'You\'ve prevented Protean from carrying out his plot for a Praetorian invasion, but not without '
        + 'a heavy cost - the death of your alternate self.',
    },
  ],
  acquisition: 'Complete the story arc from Special Agent Jenni Adair',
  links: [
    { title: 'Singular Vision Badge', href: 'https://homecoming.wiki/wiki/Singular_Vision_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/singular-vision.png' },
  ],
}
