import { Component, OnChanges, Input } from "@angular/core";


@Component({
    selector: 'star',
    templateUrl : 'star.component.html'
})
export class StarComponent implements OnChanges {
    starWidth: number;
    @Input() rating: number;

    ngOnChanges(): void {
        this.starWidth = this.rating * 86 / 5;
    }
}