import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {Boomtown} from "../../map/boomtown";

export const ToweringInferno: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "towering-inferno",
    names: [{value: "Towering Inferno"}],
    alignment: ALIGNMENT_HERO,
    mapKey: Boomtown.key,
    location: [-1973.0, 576.0, 4017.0],
    badgeText: [{
        value: "This tower used to be a bastion for the Trolls, providing them a good view over much of Boomtown." +
            " When the Outcasts moved in, they violently assaulted this tower and killed or drove out the Trolls holed up within." +
            " This was a major victory for the Outcasts, and they keep the fires burning within as a constant reminder to the Trolls still in Boomtown of the defeat they suffered."
    }],
    notes: "The Towering Inferno badge is atop a smoldering skyscraper 597 yards NNE of the entrance.",
    links: [
        {title: "Towering Inferno Badge", href: "https://paragonwiki.com/wiki/Towering_Inferno_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png"}],
    vidiotMapKey: "5"
};
