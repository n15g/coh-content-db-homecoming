import { BadgeData } from 'coh-content-db'

export const Voyager: BadgeData = {
  type: 'achievement',
  key: 'voyager',
  setTitleId: [1583, 1668],
  name: [
    { value: 'Voyager' },
    { alignment: 'praetorian', value: 'No Road Not Taken' },
  ],
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: [
    {
      value: `You've been able to handle everything the world has thrown at you.
 You've battled across Paragon City and the Rogue Isles, have thwarted alien invasions and explored strange new dimensions, but you have a sneaking suspicion that there is still much more to be done`,
    },
    {
      alignment: 'praetorian', value: `Standing in the Magisterium for the first time, never in your wildest dreams could you have guessed the road you'd take from there to here.
 But there is no rest for someone such as yourself, and though you can't predict where you will head next -- you will still charge ahead!`,
    },
  ],
  acquisition: 'Collect 1250 badges.',
  links: [
    { title: 'Voyager Badge', href: 'https://homecoming.wiki/wiki/Voyager_Badge' },
    { title: 'No Road Not Taken Badge', href: 'https://homecoming.wiki/wiki/No_Road_Not_Taken_Badge' },
  ],
  icon: [
    { alignment: 'hero', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/voyager-h.png' },
    { alignment: 'villain', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/voyager-v.png' },
  ],
}
