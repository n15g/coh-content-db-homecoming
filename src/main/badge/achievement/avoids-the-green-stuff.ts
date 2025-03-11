import { BadgeData } from 'coh-content-db'

export const AvoidsTheGreenStuff: BadgeData = {
  type: 'ACHIEVEMENT',
  key: 'avoids-the-green-stuff',
  setTitle: { id: 1993 },
  name: [
    { value: 'Avoids the Green Stuff' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    {
      value: 'You defeated Anti-Matter at the Keyes Island Reactor without letting a member of your league '
        + 'get caught in a Obliteration Beam.',
    },
  ],
  acquisition: 'Don\'t let anyone be caught by an Obliteration Beam in the final battle with Anti-Matter during the Keyes Island Reactor Trial',
  links: [
    { title: 'Avoids the Green Stuff Badge', href: 'https://homecoming.wiki/wiki/Avoids_the_Green_Stuff_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/it-keyes.png' },
  ],
}
