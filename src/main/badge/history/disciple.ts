import { BadgeData, zoneLink } from 'coh-content-db'
import { SteelCanyon } from '../../zone/steel-canyon'
import { SkywayCity } from '../../zone/skyway-city'
import { Boomtown } from '../../zone/boomtown'
import { Faultline } from '../../zone/faultline'

export const Disciple: BadgeData = {
  type: 'HISTORY',
  key: 'disciple',
  setTitle: { id: 153 },
  name: [
    { value: 'Disciple' },
  ],
  alignment: ['H'],
  badgeText: [
    { value: `You have learned the history behind the founding of Hero Corps.` },
  ],
  links: [
    { title: 'Disciple Badge', href: 'https://homecoming.wiki/wiki/Disciple_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/history/history-h.png' },
  ],
  requirements: [[
    {
      key: 'disc-0',
      type: 'PLAQUE',
      zoneKey: SteelCanyon.key,
      plaqueType: 'MONUMENT',
      loc: [-4023, -80, -272],
      plaqueInscription: `In January of 2003, Rebecca Foss and Hero Corps returned to Paragon City. Ms. Foss held a conference here to commemorate the opening of the company's new headquarters in Steel Canyon. She said, 'The world has been through hard times indeed. All our heroes are needed now, more than ever. And Hero Corps is needed as well.'`,
      notes: `This plaque is in ${zoneLink(SteelCanyon)}, 244 yards south of the Sewer Network Entrance marker, in Fools Gold District.`,
      vidiotMapKey: '1',
    },
    {
      key: 'disc-1',
      type: 'PLAQUE',
      zoneKey: SkywayCity.key,
      plaqueType: 'MONUMENT',
      loc: [734, -121, -3747],
      plaqueInscription: `On this site in March of 1999, the hero Luminary gave a demonstration of his powers. Though public sentiment was against the fledgling company Hero Corps, Luminary was convinced he could turn that sentiment around. When he brought forth an aura of healing light, each person on the street felt touched. Still, some were unmoved. Eliza McCaffrey, one of the spectators remarked, 'Sure, his powers are amazing. That makes me all the more nervous that they're for sale!'`,
      notes: `This plaque is in ${zoneLink(SkywayCity)}, 221 yds WNW of the marker for The Gruff.`,
      vidiotMapKey: '1',
    },
    {
      key: 'disc-2',
      type: 'PLAQUE',
      zoneKey: Boomtown.key,
      plaqueType: 'MONUMENT',
      loc: [-1908, 130, 758],
      plaqueInscription: `This plaque commemorates a massive protest held in opposition to the construction of Hero Corps headquarters. Among the protesters were a number of heroes, including Justin Greene, known in combat as Green Justice, and his mentor and friend Hero 1. Mr. Greene summed up the protester's sentiments with the following statement, 'How can the people of this city trust heroes who work for money? When you put your life in another man's hands, you have to know that he's helping you because he wants to. You have to know that his heart is really in it.'`,
      notes: `This plaque is in ${zoneLink(Boomtown)}, 497 yds north-northwest of Powderkeg marker.`,
      vidiotMapKey: '1',
    },
    {
      key: 'disc-3',
      type: 'PLAQUE',
      zoneKey: Boomtown.key,
      plaqueType: 'MONUMENT',
      loc: [-2648, 5, 3055],
      plaqueInscription: `This building was the site of the first clash between Hero Corps and the Freedom Phalanx. Determined to prove their worth to a doubtful public, Hero Corps had begun investigating the activities of an archvillain known as the Jade Maiden. In February of 1999, Luminary and his comrades in Hero Corps arrived here to arrest the villain, only to discover that the Freedom Phalanx was already on the trail. In the confusion that ensued, the Jade Maiden escaped.`,
      notes: `This plaque is in ${zoneLink(Boomtown)}, 319 yds south and a tad east of Powderkeg marker.`,
      vidiotMapKey: '2',
    },
    {
      key: 'disc-4',
      type: 'PLAQUE',
      zoneKey: Boomtown.key,
      plaqueType: 'MONUMENT',
      loc: [-686, 272, 3123],
      plaqueInscription: `After the destruction of Hero Corp's first Paragon City office, the company planned to rebuild their headquarters here. But public sentiment could not have been more firmly set against them. Despite the patronage of Countess Crey, this site remained vacant, and in October 1999 Hero Corps was forced to move on to another city.`,
      notes: `This plaque is in ${zoneLink(Boomtown)}, 882 yds north-northwest of the entrance.`,
      vidiotMapKey: '3',
    },
    {
      key: 'disc-5',
      type: 'PLAQUE',
      zoneKey: Faultline.key,
      plaqueType: 'MONUMENT',
      loc: [-245, -44, -423],
      plaqueInscription: `In May of 1999, following the destruction of Hero Corps' original Paragon City headquarters, Countess Crey held a conference at this site to announce her sponsorship of the ill-fated company. She joined hands with Rebecca Foss, Hero Corps' founder, and said, 'A new world of heroes is upon us. Crey Technologies will not be left behind.'`,
      notes: `This plaque is in ${zoneLink(Faultline)}, 180 yds north of the Aftershock marker.`,
      vidiotMapKey: '1',
    },
    {
      key: 'disc-6',
      type: 'PLAQUE',
      zoneKey: Faultline.key,
      plaqueType: 'MONUMENT',
      loc: [631, -103, 21],
      plaqueInscription: `This plaque marks the site of the original Hero Corps headquarters, which was destroyed by a gang of mysterious soldiers clad in power armor. Although Hero Corps' employees made it out alive, Hero Corps was devastated by the loss. Its founder, Rebecca Foss, spoke tearfully the next morning on the radio program 'Wake up Paragons.' 'Who could hate us so much?' she asked, 'We only want to help!'`,
      notes: `This plaque is in ${zoneLink(Faultline)}, 227 yds due west of the Aftershock marker.`,
      vidiotMapKey: '2',
    },
  ]],
}
