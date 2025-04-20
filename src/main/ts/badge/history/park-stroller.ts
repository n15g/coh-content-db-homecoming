import { BadgeData, zoneLink } from 'coh-content-db'
import { Brickstown } from '../../zone/brickstown'
import { IndependencePort } from '../../zone/independence-port'

export const ParkStroller: BadgeData = {
  type: 'history',
  key: 'park-stroller',
  setTitleId: [2274],
  name: 'Park Stroller',
  releaseDate: '2012-11-30',
  morality: 'paragon-city-access',
  badgeText: `You have visited all of Brickstown's parks!`,
  links: [
    { title: 'Park Stroller Badge', href: 'https://homecoming.wiki/wiki/Park_Stroller_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/history/park-stroller.png',
  requirements: [
    {
      key: 'park-0',
      type: 'monument',
      location: { zoneKey: Brickstown.key, coords: [768, 0, -1532], icon: 'plaque', iconText: '3' },
      monumentText: `Brickstown's economy was hit hard when Galaxy City came under attack, and a crime wave like none other arose in its aftermath.
It was during this dark time that many of the city's empty plots and construction yards became cesspools of illicit activity.
It wasn't until Brickstown's own Justin Sinclair made it his civic mission to turn these dilapidated lots into verdant recreational parks for all citizens to enjoy.
West Park is the landmark first of many parks that has buried the garbage of old Brickstown, and along with it, its crime.`,
      notes: `Located 142 yards northeast of the entrance to ${zoneLink(IndependencePort)}.`,
    },
    {
      key: 'park-1',
      type: 'monument',
      location: { zoneKey: Brickstown.key, coords: [-2368, -7, -479], icon: 'plaque', iconText: '4' },
      monumentText: `To Justin Sinclair the Ziggurat is a thing by which the citizens of Brickstown should feel empowered.
It is not a symbol of fear, but one of hope. Sentinel Park admirably looks upon this grand monument knowing that it's not only what keeps Brickstown safe from villainy, but the entirety of Paragon City.
Sentinel Park was proudly built with these values in mind.`,
      notes: `Located 316 yards east of the Prison Power Station neighborhood marker.`,
    },
    {
      key: 'park-2',
      type: 'monument',
      location: { zoneKey: Brickstown.key, coords: [-3, 0, 1344], icon: 'plaque', iconText: '5' },
      monumentText: `Seven Gates is home to the majority of Brickstown's working-class citizens - industrious men and women who make this city a better place to live.
It is unto them that Justin Sinclair, in coordination with the Brickstown City Council dedicates this park.
Seven Gates' residents now have a peaceful place to relax and enjoy the outdoors, all within the comfort and convenience of their own backyard.`,
      notes: `Located 80 yards south of Serafina, the Magic Store contact.`,
    },
  ],
}
