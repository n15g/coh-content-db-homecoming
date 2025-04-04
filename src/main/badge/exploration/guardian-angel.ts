import { BadgeData } from 'coh-content-db'
import { FoundersFalls } from '../../zone/founders-falls'

export const GuardianAngel: BadgeData = {
  type: 'exploration',
  key: 'guardian-angel',
  setTitleId: [1558],
  name: [
    { alignment: 'hero', value: 'Guardian Angel' },
    { alignment: 'villain', value: 'Barely Contained' },
  ],
  morality: 'heroic',
  zoneKey: FoundersFalls.key,
  loc: [3776, 0, 506],
  badgeText: `Williams Square has always been seen as a place of safety by the people of Founders' Falls, who are constantly plagued by demons in the Circle of Thorns or the Devouring Earth.
Unknown to the people, it is because each of the angelic statues overlooking it is embedded with a magical rune, warding off evil forces from the area.
The presence of Numina and Infernal prevent the wards from being shattered easily - but if they were to be disposed of, it wouldn't be long until the wards were broken.`,
  notes: `Located in the Williams Square neighborhood, on the north side of the fountain in the main plaza.`,
  links: [
    { title: 'Guardian Angel Badge', href: 'https://homecoming.wiki/wiki/Guardian_Angel_Badge' },
    { title: 'Barely Contained Badge', href: 'https://homecoming.wiki/wiki/Barely_Contained_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png',
  vidiotMapKey: '3',
}
