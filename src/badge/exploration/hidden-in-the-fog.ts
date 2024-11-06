import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";
import {LabyrinthMap} from "../../map/labyrinth";

export const HiddenInTheFog: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "hidden-in-fog",
    setTitleId: 2530,
    names: [{value: "Hidden In The Fog"}],
    alignment: ALIGNMENT_ANY,
    mapKey: Labyrinth.key,
    badgeText: [{
        value: "The Labyrinth of Fog is an endless maze constructed from the amalgamation of memories taken from those who have entered the maze. Some speak of finding lost secrets, long forgotten, laying hidden amongst the fog, and that those who surrender themselves to the labyrinth are in a position to glean forbidden knowledge."
    }],
    notes: "Visit any of the seven secret locations hidden within the Labyrinth of Fog.",
    links: [
        {title: "Hidden In The Fog Badge", href: "https://homecoming.wiki/wiki/Hidden_In_The_Fog_Badge"},
    ],
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/labyrinth.png"}
};
