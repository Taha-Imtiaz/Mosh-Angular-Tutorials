export class LikeComponent {


    constructor(private _likesCount: number, private _isSelected: boolean) { }

    onClick() {
        // if(this.isSelected) {
        //     this.likesCount--;
        // }
        // else {
        //     this.likesCount++
        // }
        // increase or decrease likes count
        this._likesCount += (this._isSelected) ? -1 : 1
        this._isSelected = !this._isSelected

    }
    get likesCount() {
        return this._likesCount
    }
    get isSelected() {
        return this._isSelected
    }
}