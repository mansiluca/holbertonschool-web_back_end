import Building from "./5-building";

export default class SkyHighBuilding extends Building {
    constructor(sqft, stories) {
        super(sqft);
        this.stories = stories;
    }
    get floors() {
        return this.stories;
    }
    set floors(newFloors) {
        this.stories = newFloors;
    }
    get stories() {
        return this._stories;
    }
    set stories(newStories) {
        if (typeof newStories !== 'number') {
            throw new TypeError('Stories must be a number');
        }
        this._stories = newStories;
    }
    evacuationWarningMessage() {
        return `Evacuate slowly the ${this.stories} stories`;
    }
}
