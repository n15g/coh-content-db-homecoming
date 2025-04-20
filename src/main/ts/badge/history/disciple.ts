import { BadgeData, zoneLink } from 'coh-content-db'
import { SteelCanyon } from '../../zone/steel-canyon'
import { SkywayCity } from '../../zone/skyway-city'
import { Boomtown } from '../../zone/boomtown'
import { Faultline } from '../../zone/faultline'
import { SewerNetwork } from '../../zone/sewer-network'

export const Disciple: BadgeData = {
  type: 'history',
  key: 'disciple',
  setTitleId: [153],
  name: 'Disciple',
  releaseDate: '2012-11-30',
  morality: 'paragon-city-access',
  badgeText: `You have learned the history behind the founding of Hero Corps.`,
  links: [
    { title: 'Disciple Badge', href: 'https://homecoming.wiki/wiki/Disciple_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/history/history-h.png',
  requirements: [
    {
      key: 'disc-0',
      type: 'monument',
      location: { zoneKey: SteelCanyon.key, coords: [-4023, -80, -272], icon: 'pedestal', iconText: '1' },
      monumentText: `In January of 2003, Rebecca Foss and Hero Corps returned to Paragon City.
Ms. Foss held a conference here to commemorate the opening of the company's new headquarters in Steel Canyon.
She said, 'The world has been through hard times indeed. All our heroes are needed now, more than ever. And Hero Corps is needed as well.'`,
      notes: `Located 244 yards south of the ${zoneLink(SewerNetwork)} Entrance marker, in the Fools Gold District.`,
    },
    {
      key: 'disc-1',
      type: 'monument',
      location: { zoneKey: SkywayCity.key, coords: [734, -121, -3747], icon: 'pedestal', iconText: '1' },
      monumentText: `On this site in March of 1999, the hero Luminary gave a demonstration of his powers.
Though public sentiment was against the fledgling company Hero Corps, Luminary was convinced he could turn that sentiment around.
When he brought forth an aura of healing light, each person on the street felt touched. Still, some were unmoved.
Eliza McCaffrey, one of the spectators remarked, 'Sure, his powers are amazing. That makes me all the more nervous that they're for sale!'`,
      notes: `Located 221 yds WNW of the marker for The Gruff.`,
    },
    {
      key: 'disc-2',
      type: 'monument',
      location: { zoneKey: Boomtown.key, coords: [-1908, 130, 758], icon: 'pedestal', iconText: '1' },
      monumentText: `This plaque commemorates a massive protest held in opposition to the construction of Hero Corps headquarters.
Among the protesters were a number of heroes, including Justin Greene, known in combat as Green Justice, and his mentor and friend Hero 1.
Mr. Greene summed up the protester's sentiments with the following statement, 'How can the people of this city trust heroes who work for money?
When you put your life in another man's hands, you have to know that he's helping you because he wants to. You have to know that his heart is really in it.'`,
      notes: `Located 497 yds north-northwest of Powderkeg marker.`,
    },
    {
      key: 'disc-3',
      type: 'monument',
      location: { zoneKey: Boomtown.key, coords: [-2648, 5, 3055], icon: 'pedestal', iconText: '2' },
      monumentText: `This building was the site of the first clash between Hero Corps and the Freedom Phalanx.
Determined to prove their worth to a doubtful public, Hero Corps had begun investigating the activities of an archvillain known as the Jade Maiden.
In February of 1999, Luminary and his comrades in Hero Corps arrived here to arrest the villain, only to discover that the Freedom Phalanx was already on the trail.
In the confusion that ensued, the Jade Maiden escaped.`,
      notes: `Located 319 yds south and a tad east of Powderkeg marker.`,
    },
    {
      key: 'disc-4',
      type: 'monument',
      location: { zoneKey: Boomtown.key, coords: [-686, 272, 3123], icon: 'pedestal', iconText: '3' },
      monumentText: `After the destruction of Hero Corp's first Paragon City office, the company planned to rebuild their headquarters here.
But public sentiment could not have been more firmly set against them. Despite the patronage of Countess Crey, this site remained vacant, and in October 1999 Hero Corps was forced to move on to another city.`,
      notes: `Located 882 yds north-northwest of the entrance.`,
    },
    {
      key: 'disc-5',
      type: 'monument',
      location: { zoneKey: Faultline.key, coords: [-245, -44, -423], icon: 'pedestal', iconText: '1' },
      monumentText: `In May of 1999, following the destruction of Hero Corps' original Paragon City headquarters, Countess Crey held a conference at this site to announce her sponsorship of the ill-fated company.
She joined hands with Rebecca Foss, Hero Corps' founder, and said, 'A new world of heroes is upon us. Crey Technologies will not be left behind.'`,
      notes: `Located 180 yds north of the Aftershock marker.`,
    },
    {
      key: 'disc-6',
      type: 'monument',
      location: { zoneKey: Faultline.key, coords: [631, -103, 21], icon: 'pedestal', iconText: '2' },
      monumentText: `This plaque marks the site of the original Hero Corps headquarters, which was destroyed by a gang of mysterious soldiers clad in power armor.
Although Hero Corps' employees made it out alive, Hero Corps was devastated by the loss.
Its founder, Rebecca Foss, spoke tearfully the next morning on the radio program 'Wake up Paragons.'
'Who could hate us so much?' she asked, 'We only want to help!'`,
      notes: `Located 227 yds due west of the Aftershock marker.`,
    },
  ],
}
