import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";
import {TheLabyrinthOfFog} from "../../map/the-labyrinth-of-fog";

export const HiddenInTheFog: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "hidden-in-the-fog",
    setTitleId: 2530,
    names: [{value: "Hidden In The Fog"}],
    alignment: ALIGNMENT_ANY,
    mapKey: TheLabyrinthOfFog.key,
    badgeText: [{
        value: `The Labyrinth of Fog is an endless maze constructed from the amalgamation of memories taken from those who have entered the maze. Some speak of finding lost secrets, long forgotten, laying hidden amongst the fog, and that those who surrender themselves to the labyrinth are in a position to glean forbidden knowledge.`
    }],
    notes: `Visit any of the seven secret locations hidden within the Labyrinth of Fog:
        
        * Green Warehouse [-1806.0, -261.1, 1118.5]
        * Violet Oranbega [-1327.5, 92.4, -1014.0]
        * Blue Cave [-24.5, -149.5, -3015.0]
        * Yellow Lambda [371.0, -462.6, 1254.0]
        * Red Cargo [442.4, -147.0, -1248.0]
        * Orange Council [-4281.4, -476.0, 2288.3]`,
    links: [
        {title: "Hidden In The Fog Badge", href: "https://homecoming.wiki/wiki/Hidden_In_The_Fog_Badge"},
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/labyrinth.png"}]
};
