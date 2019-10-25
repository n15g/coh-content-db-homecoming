import {ALIGNMENT_HERO, Alternate, BadgeType, IBadgeData} from "coh-content-db";
import {FoundersFalls} from "../../map/founders-falls";

export const GuardianAngel: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "guardian-angel",
    setTitleId: 1558,
    names: [
        {type: Alternate.H, value: "Guardian Angel"},
        {type: Alternate.V, value: "Barely Contained"}
    ],
    alignment: ALIGNMENT_HERO,
    mapKey: FoundersFalls.key,
    location: [3776.0, 0.0, 506.0],
    badgeText: [{
        value: "Williams Square has always been seen as a place of safety by the people of Founders' Falls, who are constantly plagued by demons in the Circle of Thorns or the Devouring Earth." +
            " Unknown to the people, it is because each of the angelic statues overlooking it is embedded with a magical rune, warding off evil forces from the area." +
            " The presence of Numina and Infernal prevent the wards from being shattered easily - but if they were to be disposed of, it wouldn't be long until the wards were broken."
    }],
    notes: "Located in the Williams Square neighborhood of [map:founders-falls], on the north side of the fountain in the main plaza.",
    links: [
        {title: "Guardian Angel Badge", href: "https://paragonwiki.com/wiki/Guardian_Angel_Badge"},
        {title: "Barely Contained Badge", href: "https://paragonwiki.com/wiki/Barely_Contained_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png"}],
    vidiotMapKey: "3"
};
