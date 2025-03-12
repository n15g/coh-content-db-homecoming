import { BadgeData } from 'coh-content-db'

export const OneOfTheEight: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'one-of-the-eight',
  setTitle: { id: 2237 },
  name: [
    { value: 'One of the Eight' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    {
      value: 'You tamed the chaos and magic which ran unchecked in the Night Ward, saving the world from the '
        + 'would-be rampages of Sorceress Serene and the Mother of all Monsters.',
    },
  ],
  acquisition: 'Complete the story arc from The Magician',
  links: [
    { title: 'One of the Eight Badge', href: 'https://homecoming.wiki/wiki/One_of_the_Eight_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/one-of-the-eight.png' },
  ],
}
