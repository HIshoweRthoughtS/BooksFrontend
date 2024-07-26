import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { BookListComponent } from '../components/books/book-list/book-list.component';
import { FooterComponent } from '../components/general/footer/footer.component';
import { AccountsService } from '../shared/services/manager/accounts.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterOutlet,BookListComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
/**Future Expensions
 * 
 * Changelog that shows all changes in the books table
 * (state to finished, essays, dates, etc)
 * 
 * eine todo liste an buechern
 * 
 * roles
 * (only i am allowed to review, add books, etc)
 * (friends may add comments and share there own reviews)
 */

/**
 * todo:[future] i noticed that this code uses almost of angular's tutorial features.
 * if anyone would like to use this as an inspiration for a tutorial/yt-tt-series or course for angular
 * you can hit me up over discord (@) and I'll exlpain what i mean, or what I had in mind, when writing
 * thw code or this message.
 * If you dont feel like talking to me, I complelty understand and you are also free to use this code base as you want,
 * where you want. I run this for me and my friends, but with no capacity or intention for bigger use.
 * If you want to make this commercial, please do. I can see this beeing extandable for films and whatever you can think of.
 * i think i have written nice enough code to be extandable. maybe you have to check my db design, that was very on the fly and
 * how I saw fit at the moment. i had normalization in mind, but some joins are there for convenience or
 * !this might be important! for pseudonominizing the data (if you remove the acc joins from read you get reviews for book
 * without the POSSIBILITY of user data beeing involved at all)
 * 
 * @Thor:[MODS] I would like to send this to thor to spread awareness, because I would like to see it in a more reachable way.
 * I think he might enjoy this and I think so will you. So I ask your permission to send this to him. I am very open for spending
 * some bits in a cheer for tts
 * 
 * PN THOR: I have no problem giving you full control over the repo, since this inedvertantyl means, that you name will be
 * connected to it. That can only be a positiv.
 * As I have mentioned, I run a small lokal version for me and my friends. If you like to join it here is the ip:
 * 
 * no i do not have a domain because who needs human readable adresses, if all my friends have it bookmarked. 
 * we humans dont even have to read anymore
 * 
 * 
 * 
 * But now that I have written a page to track my reading progress, i have to catch back up with the reading part.
 * as you can imagine, in the last few months, i have read more documentation and stackoverflow than books.
 * Now I wanna focus on books and writing. As you can see, my writing habits are now manifesting in my comments,
 * wich I enjoy, but will be annoying for everyone else (and also me again later).
*/



export class AppComponent {
  title = 'BookListFrontEnd';

  public loginname$ = this.accd.loginname$;

  constructor(private readonly router:Router, private readonly accd:AccountsService) {
    accd.logedIn$.subscribe((logedIn:boolean) => {
      if (!logedIn) {
        router.navigate(['/'])
      }
    });
  }
}

