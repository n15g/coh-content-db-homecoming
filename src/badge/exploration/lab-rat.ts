import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";
import {LabyrinthOfFog} from "../../map/labyrinth-of-fog";

export const LabRat: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "lab-rat",
    setTitleId: 2535,
    names: [{value: "Lab Rat"}],
    alignment: ALIGNMENT_ANY,
    mapKey: labyrnth.key,
    location:[7146.4, -802.5, 64.5],
    badgeText: [{
        value: "While exploring the Labyrinth of Fog, you navigated a maze known as the Endless Colonnade." +
        "You can't help but feel like a lab rat, running a maze for some unseen intelligence's amusement... "
    }],
    notes: `The Lab Rat Badge is beneath the white mote at the end of the Endless Colonnade in The Labyrinth of Fog.`

    links: [
        {title: "Lab Rat Badge", href: "https://homecoming.wiki/wiki/Lab_Rat_Badge_Badge"},
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/labyrinth.png"}
    ],
};
