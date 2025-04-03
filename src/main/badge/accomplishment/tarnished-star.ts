import { BadgeData, contactLink } from 'coh-content-db'
import { DocBuzzsaw } from '../../contact/doc-buzzsaw'

export const TarnishedStar: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'tarnished-star',
  setTitle: { id: 2438 },
  name: 'Tarnished Star',
  alignment: ['V'],
  badgeText: `Despite all the villains you've put away, you couldn't help becoming one yourself.
You were reminded of this when Manticore ambushed you in the Zig during Clamor and Bile's breakout, in front of the nineteen high-profile arrests you'd made yourself.
Undeterred, you added him and his Shining Star lackeys to your list of accomplishments.`,
  acquisition: `In ${contactLink(DocBuzzsaw)}'s "The Freakish Lab of Dr. Vahzilok" arc, fill every jail cell in The Zig during your life as a hero, before becoming a villain and releasing Bile.`,
  links: [
    { title: 'Tarnished Star Badge', href: 'https://homecoming.wiki/wiki/Tarnished_Star_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/tarnished-star.png',
}
