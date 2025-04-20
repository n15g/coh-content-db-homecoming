import { BadgeData } from 'coh-content-db'

export const TestedTheWater: BadgeData = {
  type: 'accomplishment',
  key: 'tested-the-water',
  setTitleId: [1425],
  name: 'Tested the Water',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: [
    {
      alignment: 'hero', value: `You're not quick to pass judgment on others, but will step in when things stray off course.
You earned this badge by helping someone complete an Alignment Mission that is not the same as your current alignment.`,
    },
    { alignment: 'villain', value: `You're willing to work with just about anybody if the pay is good enough.` },
  ],
  acquisition: 'Help someone complete an alignment mission that is different from your current alignment.',
  links: [
    { title: 'Tested the Water Badge', href: 'https://homecoming.wiki/wiki/Tested_the_Water_Badge' },
  ],
  icon: [
    { alignment: 'hero', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/tested-the-water-h.png' },
    { alignment: 'villain', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/tested-the-water-v.png' },
  ],
}
