import { BadgeData } from 'coh-content-db'

export const MirrorImage: BadgeData = {
  type: 'ACHIEVEMENT',
  key: 'mirror-image',
  setTitle: { id: 2524 },
  name: [
    { value: 'Mirror Image' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    {
      value: `Sometimes experiences can be uncanny, and when you stop to look around you'll notice peculiarities that surely can't be happenstance... Regardless, you've banded together with your same-Archetype comrades and emerged triumphant!`,
    },
  ],
  acquisition: `Complete a Task or Strike Force with a team that qualifies for Archetype Duplication.`,
  links: [
    { title: 'Mirror Image Badge', href: 'https://homecoming.wiki/wiki/Mirror_Image_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/mirror-image.png' },
  ],
}
