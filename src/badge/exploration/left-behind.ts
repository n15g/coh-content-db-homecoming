import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {SkywayCity} from "../../map/skyway-city";

export const LeftBehind: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "left-behind",
    names: [{value: "Left Behind"}],
    alignment: ALIGNMENT_HERO,
    mapKey: SkywayCity.key,
    location: [-1216.0, 4.0, -2368.0],
    badgeText: [{
        value: "Before the Rikti War, the Red Tiger, Jake Montoya, used this area to train fellow heroes." +
            " The people of Paragon would gather on the weekends to watch the exciting 'Hide Park Sparring Sessions'." +
            " After his mandatory retirement, the sparring sessions stopped all together."
    }],
    notes: "The Left Behind Badge is in the Hide Park neighborhood of Skyway City. It is in the middle of a small courtyard 238 yards west of the Talos Island zone connection.",
    links: [
        {title: "Left Behind Badge", href: "https://paragonwiki.com/wiki/Left_Behind_Badge"}
    ],
    imageKeys: [{value: "core.exploration.hero"}],
    vidiotMapKey: "7"
};
