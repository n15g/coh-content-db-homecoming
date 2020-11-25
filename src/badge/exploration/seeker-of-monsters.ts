import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {TheHollows} from "../../map/the-hollows";

export const SeekerOfMonsters: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "seeker-of-monsters",
    setTitleId: 193,
    names: [{value: "Seeker of Monsters"}],
    alignment: ALIGNMENT_HERO,
    mapKey: TheHollows.key,
    location: [21.0, -345.0, -1280.0],
    badgeText: [{
        value: "Grendel's Gulch was named after the Trolls former leader, Grendel, who was defeated by Atta in a contest of strength on this spot."
    }],
    notes: "Found 217 yards South West of Grendel's Gulch marker.",
    links: [
        {title: "Seeker of Monsters Badge", href: "https://paragonwiki.com/wiki/Seeker of Monsters_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png"}],
    vidiotMapKey: "2"
};
