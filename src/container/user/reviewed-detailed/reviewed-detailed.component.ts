import { Component } from '@angular/core';

@Component({
  selector: 'app-reviewed-detailed',
  standalone: true,
  imports: [],
  templateUrl: './reviewed-detailed.component.html',
  styleUrl: './reviewed-detailed.component.scss'
})
export class ReviewedDetailedComponent {

    //todo: when the user is browsing his old review for the highlights, he can see them as if they were written in said book.
    //in the order in which they appear in the book, they appear on the website. The  user clicks a page or swipes to the next one.
    //obvously, that is just for the look. The pag will also be useful.
    //todo: the swiping looks like a page turning and the background is THE BOOK in reference.

    // this way the pages are different. one is used to create and modyfiy, the other one uses the info to overengeneer the content's style

}
