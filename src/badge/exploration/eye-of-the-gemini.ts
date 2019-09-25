import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {EchoGalaxyCity} from "../../map/echo-galaxy-city";

export const EyeOfTheGemini: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "eye-of-the-gemini",
    names: [{value: "Eye of the Gemini"}],
    alignment: ALIGNMENT_HERO,
    mapKey: EchoGalaxyCity.key,
    location: [-1376.0, 0.0, 347.0],
    badgeText: [{
        value: "Gemini Park was once a popular gathering spot for people in the city, until the Hellions and Vahzilok took over." +
            " On some occasions many heroes could be seen relaxing in the area, daring the local gangs to try something." +
            " The people of Paragon would hold events on these days, happy to have their park wrested away from the hands of criminals."
    }],
    notes: "The Eye of the Gemini Badge is located in the Gemini Park neighborhood of Echo: Galaxy City. It is near a set of three picnic tables 67 yards west of the neighborhood marker.",
    links: [
        {title: "Eye of the Gemini Badge", href: "https://paragonwiki.com/wiki/Eye_of_the_Gemini_Badge"}
    ],
    imageKeys: [{value: "core.exploration.hero"}],
    vidiotMapKey: "7"
};
