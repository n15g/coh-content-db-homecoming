import { BadgeData } from 'coh-content-db'

export const AvoidsTheGreenStuff: BadgeData = {
  type: 'achievement',
  key: 'avoids-the-green-stuff',
  setTitleId: [1993],
  name: 'Avoids the Green Stuff',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: 'You defeated Anti-Matter at the Keyes Island Reactor without letting a member of your league get caught in a Obliteration Beam.',
  acquisition: `Don't let anyone be caught by an Obliteration Beam in the final battle with Anti-Matter during the Keyes Island Reactor Trial.`,
  links: [
    { title: 'Avoids the Green Stuff Badge', href: 'https://homecoming.wiki/wiki/Avoids_the_Green_Stuff_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/it-keyes.png',
}
