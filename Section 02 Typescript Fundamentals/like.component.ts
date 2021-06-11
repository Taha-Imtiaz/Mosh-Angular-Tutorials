export class LikeComponent {


    constructor(public likesCount: number, public isSelected: boolean) { }

    onClick() {
        // if(this.isSelected) {
        //     this.likesCount--;
        // }
        // else {
        //     this.likesCount++
        // }
        // increase or decrease likes count
        this.likesCount += (this.isSelected) ? -1 : 1
        this.isSelected = !this.isSelected

    }
}