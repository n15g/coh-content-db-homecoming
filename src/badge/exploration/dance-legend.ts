import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {SteelCanyon} from "../../map/steel-canyon";

export const DanceLegend: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "dance-legend",
    names: [{value: "Dance Legend"}],
    alignment: ALIGNMENT_HERO,
    mapKey: SteelCanyon.key,
    location: [-4316.0, -100.0, 1783.0],
    badgeText: [{
        value: "Paragon Dance Party was a popular place for local heroes to go relax and have a good time." +
            " However, it was almost instantly closed when entrances to Pocket D were opened up by the owner of the Dance Party, DJ Zero, who was merely using the location as a test bed to see if" +
            " his pet project, Pocket D, would be a success."
    }],
    notes: "The Dance Legend Badge is at the back entrance of the building 170 yards northwest of the south Paragon City Monorail station.",
    links: [
        {title: "Dance Legend Badge", href: "https://paragonwiki.com/wiki/Dance_Legend_Badge"}
    ],
    imageKeys: [{value: "core.exploration.hero"}],
    vidiotMapKey: "5"
};
