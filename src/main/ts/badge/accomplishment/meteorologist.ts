import { BadgeData } from 'coh-content-db'
import { NemesisWeatherControl } from '../../mission/nemesis-weather-control'

export const Meteorologist: BadgeData = {
  type: 'accomplishment',
  key: 'meteorologist',
  setTitleId: [83],
  name: 'Meteorologist',
  morality: 'heroic',
  badgeText: `You have crushed Nemesis' weather controlling equipment.`,
  links: [
    { title: 'Meteorologist Badge', href: 'https://homecoming.wiki/wiki/Meteorologist_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/meteorologist.png',
  requirements: [
    { key: NemesisWeatherControl.key, type: 'mission', missionKey: NemesisWeatherControl.key },
  ],
}
