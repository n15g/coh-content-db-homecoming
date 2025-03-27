import { BadgeData, mapLink } from 'coh-content-db'
import { Brickstown } from '../../map/brickstown'

export const ParkStroller: BadgeData = {
  type: 'HISTORY',
  key: 'park-stroller',
  setTitle: { id: 2274 },
  name: [
    { value: 'Park Stroller' },
  ],
  alignment: ['H'],
  badgeText: [
    { value: `You have visited all of Brickstown's parks!` },
  ],
  links: [
    { title: 'Park Stroller Badge', href: 'https://homecoming.wiki/wiki/Park_Stroller_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/history/park-stroller.png' },
  ],
  partials: [
    {
      key: 'park-0',
      type: 'PLAQUE',
      mapKey: Brickstown.key,
      plaqueType: 'WALL_PLAQUE',
      loc: [768, 0, -1532],
      plaqueInscription: `Brickstown's economy was hit hard when Galaxy City came under attack, and a crime wave like none other arose in its aftermath. It was during this dark time that many of the city's empty plots and construction yards became cesspools of illicit activity. It wasn't until Brickstown's own Justin Sinclair made it his civic mission to turn these dilapidated lots into verdant recreational parks for all citizens to enjoy. West Park is the landmark first of many parks that has buried the garbage of old Brickstown, and along with it, its crime.`,
      notes: `This plaque is in ${mapLink(Brickstown)}, located 142 yards northeast of the entrance to Independence Port.`,
      vidiotMapKey: '3',
    },
    {
      key: 'park-1',
      type: 'PLAQUE',
      mapKey: Brickstown.key,
      plaqueType: 'WALL_PLAQUE',
      loc: [-2368, -7, -479],
      plaqueInscription: `To Justin Sinclair the Ziggurat is a thing by which the citizens of Brickstown should feel empowered. It is not a symbol of fear, but one of hope. Sentinel Park admirably looks upon this grand monument knowing that it's not only what keeps Brickstown safe from villainy, but the entirety of Paragon City. Sentinel Park was proudly built with these values in mind.`,
      notes: `This plaque is in ${mapLink(Brickstown)}, 316 yards east of the Prison Power Station neighborhood marker.`,
      vidiotMapKey: '4',
    },
    {
      key: 'park-2',
      type: 'PLAQUE',
      mapKey: Brickstown.key,
      plaqueType: 'WALL_PLAQUE',
      loc: [-3, 0, 1344],
      plaqueInscription: `Seven Gates is home to the majority of Brickstown's working-class citizens - industrious men and women who make this city a better place to live. It is unto them that Justin Sinclair, in coordination with the Brickstown City Council dedicates this park. Seven Gates' residents now have a peaceful place to relax and enjoy the outdoors, all within the comfort and convenience of their own backyard.`,
      notes: `This plaque is in ${mapLink(Brickstown)}, 80 yards south of Serafina, the Magic Store contact.`,
      vidiotMapKey: '5',
    },
  ],
}
