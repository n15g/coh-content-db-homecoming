import { BadgeData, mapLink } from 'coh-content-db'
import { FoundersFalls } from '../../map/founders-falls'
import { Brickstown } from '../../map/brickstown'

export const Scholastic: BadgeData = {
  type: 'HISTORY',
  key: 'scholastic',
  setTitle: { id: 158 },
  name: [
    { value: 'Scholastic' },
  ],
  alignment: ['H'],
  badgeText: [
    { value: `You have learned the history of Dr. Webb smashing the Dimensional Barrier.` },
  ],
  links: [
    { title: 'Scholastic Badge', href: 'https://homecoming.wiki/wiki/Scholastic_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/history/history-h.png' },
  ],
  partials: [
    {
      key: 'schs-0',
      type: 'PLAQUE',
      mapKey: FoundersFalls.key,
      plaqueType: 'WALL_PLAQUE',
      loc: [1725, -8, 2400],
      inscription: `On July 7, 1988, the brilliant Dr. Brian Webb, former researcher for Freedom Phalanx, held a surprise press conference at this site. He announced that he had discovered a way to enter other dimensions. He demonstrated his technology for the awed spectators, even transporting a few lucky reporters and dignitaries to an alternate world. Dr. Webb said, 'My technology has proven that possibility is truly limitless. The future is what we make of it.'`,
      notes: `This plaque is in ${mapLink(FoundersFalls)}. It is on the side of one of the channel walls, just north of where the wall angles inward in The Gaspee neighborhood. It is approximately 220 yards west and slightly south of The Gaspee neighborhood marker. You will find the marker just north of Dr. Kahn and the entrance to the Vanguard Base.`,
      vidiotMapKey: '1',
    },
    {
      key: 'schs-1',
      type: 'PLAQUE',
      mapKey: Brickstown.key,
      plaqueType: 'WALL_PLAQUE',
      loc: [-229, 8, -370],
      inscription: `This building was once the lab of Dr. Brian Webb, the brilliant scientist who broke the dimensional barrier and opened up whole new worlds to science. His notes reveal that his findings were linked to previous scientists' research on the effects of the drug Superadine. Much has been made of this discovery, but the link between the drug and the dimensional barrier remains a mystery.`,
      notes: `This plaque is in ${mapLink(Brickstown)}. It is on the east side of a building 430 yards due south of the Paragon City Monorail station and 67 yards east-northeast of Detective Fish.`,
      vidiotMapKey: '1',
    },
    {
      key: 'schs-2',
      type: 'PLAQUE',
      mapKey: Brickstown.key,
      plaqueType: 'MONUMENT',
      loc: [-3463, 4, 2062],
      inscription: `This plaque commemorates the invasion of Paragon City by foes from an alternate dimension. In 1988, after Dr. Brian Webb smashed the dimensional barrier, it seemed that the future could only be bright, full of wonders and discoveries. But Dr. Webb had not considered the dangers his discoveries entailed. He paid for his oversight with his life, dying at the hands of a militant people from another world, who used his portal technology to invade our own. Only with the help of the Freedom Phalanx were the invaders repelled.`,
      notes: `This plaque is in ${mapLink(Brickstown)}. It is approximately 140 yards south of Holsten Armitage, the Science store contact in the southeastern part of the zone. The plaque is on a small pedestal in a corner where two chain link fences meet.`,
      vidiotMapKey: '2',
    },
  ],
}
