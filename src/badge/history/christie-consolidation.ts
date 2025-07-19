import {ALIGNMENT_ANY, BadgePartialType, BadgeType, IBadgeData, PlaqueType} from "coh-content-db";
import {KallistiWharf} from "../../map/kallisti-wharf";

export const ChristieConsolidation: IBadgeData = {
    type: BadgeType.HISTORY,
    key: "christie-consolidation",
    setTitleId: 2558,
    names: [
        {value: "Christie Consolidation"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: `You have read up on the many gambles that Emil Christie has taken to recover the Wharf after the Rikti War.`}
    ],
    links: [
        {title: 'Christie Consolidation Badge', href: 'https://homecoming.wiki/wiki/Christie_Consolidation_Badge'},
    ],
    icons: [
        {value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/history/history-h.png'}
    ],
    partials: [
        {
            key: "chri-0",
            type: BadgePartialType.PLAQUE,
            mapKey: KallistiWharf.key,
            plaqueType: PlaqueType.MONUMENT,
            location: [6080.9, 80, 1031.6],
            inscription: `Welcome, Paragonian, to Kallisti Wharf! If you are reading this, then you most likely just came down from the local tram line that Emil Christie lobbied for personally.
As one of the first directives to restoring the Wharf, Mr. Christie spent considerable time and influence getting tram service reconnected to our district.`,
            vidiotMapKey: "3"
        },
        {
            key: "chri-1",
            type: BadgePartialType.PLAQUE,
            mapKey: KallistiWharf.key,
            plaqueType: PlaqueType.MONUMENT,
            location: [5793.3, 66.78, 1726.2],
            inscription: `This area of the city may look familiar to you. If you think you saw it on ClikClak as a viral meme, you're right!
During a field test for self-driving cars, Christie Consolidated discovered and isolated a bug in the LIDAR recognition of its Autonomous Drive Software, but not before everyone started calling out the infamous 'Carnado' on social media.
We want to reiterate that nobody was hurt, and the only damage occurred to CC's own vehicles!`,
            vidiotMapKey: "4"
        },
        {
            key: "chri-2",
            type: BadgePartialType.PLAQUE,
            mapKey: KallistiWharf.key,
            plaqueType: PlaqueType.WALL_PLAQUE,
            location: [7356, 77.7, 527.5],
            inscription: `It was an easy decision to allow Vanguard a residency in our district. With the rich history, booming tech sector, and scars of the Rikti War here in the Wharf, Vanguard set up an office here as soon as recovery efforts had concluded.
Vanguard has been crucial in acclimating the influx of Praetorian Refugees - a safehouse policy that Mr. Christie launched as soon as the Praetorian War ended. Earth for Humans!`,
            vidiotMapKey: "2"
        },
        {
            key: "chri-3",
            type: BadgePartialType.PLAQUE,
            mapKey: KallistiWharf.key,
            plaqueType: PlaqueType.MONUMENT,
            location: [7141.8, 57, 2650],
            inscription: `When Emil Christie was looking to rebuild the Wharf, corporate patronage was at the top of his priority list.
Crey Biotech was one of the first in line, along with Hero Corps and Langston, to help rebuild the area. Now, these twin pillars of progress stand tall to remind us that Kallisti Wharf will endure!`,
            vidiotMapKey: "5"
        },
        {
            key: "chri-4",
            type: BadgePartialType.PLAQUE,
            mapKey: KallistiWharf.key,
            plaqueType: PlaqueType.WALL_PLAQUE,
            location: [5782.5, 53, 4698.9],
            inscription: `'Integrity Above All' was the motto that the PPD of Kallisti Wharf used to live by.
But in the years after the Rikti War, more than 80 percent of the force was commuting into the area and none of the top brass were local sons and daughters of the community.
As such, the PPD transformed into a rather cold and authoritative force within the Wharf, lacking the ability to truly understand the community they were trying to protect.
Despite efforts to reform, the city nearly caught fire when Kieran Holt died within the walls of the Precinct in 2008.
Emil Christie sought for a peaceful solution, but could not placate the residents who had lived through so much since the Rikti War and riots seemed inevitable.
As a compromise, he contracted with Blackwing Industries, a low-profile corporate paramilitary peacekeeping force, with specific instructions to integrate with the community they were to protect.
Crime is down 46 percent over the last 5 years, and polls show that residents regard Blackwing as a pivotal reason for their peace of mind.`,
            vidiotMapKey: "6"
        },
        {
            key: "chri-5",
            type: BadgePartialType.PLAQUE,
            mapKey: KallistiWharf.key,
            plaqueType: PlaqueType.WALL_PLAQUE,
            location: [1550, 66, 4720],
            inscription: `The Adamstown Infirmary was built during World War I and expanded during World War II to help care for soldiers who were shipped home with injuries when nearby Fort Steuben ran out of space to house them.
The infirmary later served the role of a field hospital during the Rikti War. Emil Christie confirmed its status as a protected historical site, and it still operates to this day as emergency care for super and non-super citizens alike.`,
            vidiotMapKey: "7"
        },
        {
            key: "chri-6",
            type: BadgePartialType.PLAQUE,
            mapKey: KallistiWharf.key,
            plaqueType: PlaqueType.MONUMENT,
            location: [580.7, 60.8, 4698.9],
            inscription: `The Old Slough began as a communal field for Adamstown, known for its murky pond and fertile soil.
The shipping business in Kallisti Wharf may have been collapsing in the 1930s and 40s, but it was being rapidly replaced with industry.
Factories began to pop up across Old Slough, replacing its dairy farms. Seemingly overnight the Slough was building planes, tanks, and weapons, eventually consuming every last bit of the old field, until all that remained was the name.
This area too plunged into poverty during the decline in the 1970s, punctuated by the fire at Manny's Gas Station that took the life of Luigi 'Lou' Spagnolo and sounded a death knell for the community in the area.`,
            vidiotMapKey: "8"
        },
        {
            key: "chri-7",
            type: BadgePartialType.PLAQUE,
            mapKey: KallistiWharf.key,
            plaqueType: PlaqueType.WALL_PLAQUE,
            location: [666.5, 71, 3750.8],
            inscription: `Halsted Aeronautics made this site their home in 1974, and was field testing VTOL for public transit until 1986.
The company went belly-up after a disastrous field test that claimed the lives of three test pilots and a film crew at the Marina docks.
The assets were sold off to various companies and to the Paragon Transit Authority, who used some of their tech for the buses that run day and night in Paragon City.
Christie Consolidated championed the LIDAR research and developed it for self-driving cars. Langston Corporation settled in this building in 2018, and the sweet smell of chocolate can be found in the air on Tuesdays and Fridays.`,
            vidiotMapKey: "9"
        },
        {
            key: "chri-8",
            type: BadgePartialType.PLAQUE,
            mapKey: KallistiWharf.key,
            plaqueType: PlaqueType.MONUMENT,
            location: [1719.4, 13, -79],
            inscription: `Welcome, friend, to Kallisti Wharf! If you are reading this, then you're probably still trying to lose your sea legs after a nice relaxing boat ride from outside the walls.
If you look out to the Northern walls of the district, you'll see the massive War-Wall sea gates that allow for marine trade and travel.
Another district improvement that Mr. Christie lobbied for to help restore the Wharf and its community!`,
            vidiotMapKey: "10"
        },
    ]
};
