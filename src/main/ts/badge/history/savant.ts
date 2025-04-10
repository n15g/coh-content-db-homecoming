import { BadgeData } from 'coh-content-db'
import { FoundersFalls } from '../../zone/founders-falls'
import { CreysFolly } from '../../zone/creys-folly'
import { Eden } from '../../zone/eden'

export const Savant: BadgeData = {
  type: 'history',
  key: 'savant',
  setTitleId: [157],
  name: 'Savant',
  morality: 'paragon-city-access',
  badgeText: `You have learned the history of the Rikti War.`,
  links: [
    { title: 'Savant Badge', href: 'https://homecoming.wiki/wiki/Savant_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/history/history-h.png',
  requirements: [
    {
      key: 'sava-0',
      type: 'monument',
      location: { zoneKey: FoundersFalls.key, coords: [4244, 3, 3689], icon: 'pedestal', iconText: '2' },
      monumentText: `During the Rikti War, this dock was converted to an emergency shelter. 
One of the few places to survive the initial bombing, the area became a haven for people with no homes to return to. 
It also became a coordination nexus for the Vanguard, an umbrella organization designed to coordinate super-powered responses to the Rikti invaders. 
Though the Vanguard was formed only after the invasion began, it quickly became the only group with any cohesion, as smaller Super Groups were decimated and destroyed. 
Many of the critical plans for the resistance were relayed through this station, including the fateful Alpha and Omega Gambit.`,
      notes: `Located 123 yds west of Mutant Store.`,
    },
    {
      key: 'sava-1',
      type: 'monument',
      location: { zoneKey: CreysFolly.key, coords: [7227, 37, -554], icon: 'pedestal', iconText: '1' },
      monumentText: `This plaque commemorates the last meeting of Statesman and Hero 1. 
They were the heroes slated to lead the Alpha and Omega Teams, and they knew they would probably not meet again. 
'We had only a minute to say goodbye,' Statesman said later. 'So we didn't say anything.' 
Although Statesman survived Alpha Team's strike on the entrenched Rikti troops, Hero 1 and Omega Team never returned from the Rikti dimension.`,
      notes: `Located 148 yds NNE of Carnival Town.`,
    },
    {
      key: 'sava-2',
      type: 'monument',
      location: { zoneKey: CreysFolly.key, coords: [2566, 4, 2683], icon: 'pedestal', iconText: '2' },
      monumentText: `In 2000, when the Rikti struck, they immediately disabled the Paragon Water Works. 
Without the efforts of the heroes Synapse and Positron, many of those who survived the initial attack would have died of thirst in the weeks to come. 
Positron devised an ingenious method of desalinating the water of Eastgate Bay, and Synapse put it into action in record time, saving hundreds of lives.`,
      notes: `Located 227 yds NNE of The Blight.`,
    },
    {
      key: 'sava-3',
      type: 'monument',
      location: { zoneKey: Eden.key, coords: [-2817, -23, 2962], icon: 'pedestal', iconText: '1' },
      monumentText: `In 2000, Woodvale was still a pleasant neighborhood where families picnicked with their children and where Synapse liked to jog. 
When the Rikti invaders struck, Synapse's first act was to use his super speed to carry as many people out of the area as possible. 
Though he regretted not being able to join his comrades in battle, he managed to save 87 lives that day before the fire from Rikti plasma weapons tore Woodvale apart.`,
      notes: `Located 109 yds NE of The Pit.`,
    },
    {
      key: 'sava-4',
      type: 'monument',
      location: { zoneKey: Eden.key, coords: [-1313, 12, 4486], icon: 'plaque', iconText: '2' },
      monumentText: `This plaque commemorates the death of Galaxy Girl, who fell in the first battle with the Rikti. 
When it became obvious that the heroes would have to fall back, Galaxy Girl insisted that she be the last to retreat. 
Remaining on the front lines, she used her healing light to save the lives of many of her retreating comrades. 
Witnesses say that she used her last bit of strength to heal her friend Ms. Liberty, rather than to save herself.`,
      notes: `Located 150 yds west of The Utopia Complex.`,
    },
  ],
}
