import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";
import {TheAbyss} from "../../map/the-abyss";

export const AbyssalGaze: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "abyssal-gaze",
    setTitleId: 1867,
    names: [{value: "Abyssal Gaze"}],
    alignment: ALIGNMENT_ANY,
    mapKey: TheAbyss.key,
    location: [1061.0, -48.0, -2222.0],
    badgeText: [{
        value: `A yawning void opens before you, a testament to Hamidon's power, but you are unmoved. You have seen true darkness first hand and it has not kept you from pressing onward.
You carry enough darkness within you and it's going to take a lot more than a big hole in the ground to impress you.
You've gazed into the abyss, and it's gazed into you too; you're both well acquainted with each other and have few secrets left to share.`
    }],
    notes: `Located in [map:${TheAbyss.key}], 0.60 miles from the Grandville transfer point, on the lip of the cliff dropping into the crater. It is in the southern edge, just west of center.`,
    links: [
        {title: "Abyssal Gaze Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Abyssal_Gaze_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png"}],
    vidiotMapKey: "8"
};
