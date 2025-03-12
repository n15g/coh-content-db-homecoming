import { BadgeData } from 'coh-content-db'

export const DestroyerOfStrength: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'destroyer-of-strength',
  setTitle: { id: 424 },
  name: [
    { value: 'Destroyer of Strength' },
  ],
  alignment: ['H'],
  badgeText: [
    {
      value: 'You defeated the being known as Ruladak the Strong, freeing the people of the Shadow Shard '
        + 'from his tyranny.',
    },
  ],
  acquisition: 'Complete the Sara Moore Task Force: The Legend of Ruladak',
  links: [
    { title: 'Destroyer of Strength Badge', href: 'https://homecoming.wiki/wiki/Destroyer_of_Strength_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/destroyer-of-strength.png' },
  ],
}
