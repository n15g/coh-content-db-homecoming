import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {SteelCanyon} from "../../map/steel-canyon";

export const Controversial: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "controversial",
    names: [{value: "Controversial"}],
    alignment: ALIGNMENT_HERO,
    mapKey: SteelCanyon.key,
    location: [-4605.0, 3.0, -2600.0],
    badgeText: [{
        value: "The statue of the heroine, \"The Night Hammer\" has been the focus of two controversies." +
            " The first was Night Hammer's disgust at how the statue turned out. The second was the \"mysterious\" disappearance of the architect who designed the statue."
    }],
    notes: "The Controversial Badge is at feet of the statue 129 yards east of the Royal Overlook neighborhood in Steel Canyon, or just in front of the base telepad location.",
    links: [
        {title: "Controversial Badge", href: "https://paragonwiki.com/wiki/Controversial_Badge"}
    ],
    imageKeys: [{value: "core.exploration.hero"}],
    vidiotMapKey: "6"
};
