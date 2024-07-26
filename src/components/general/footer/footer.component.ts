import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { DbStruct } from '../../../shared/db/db';
import { CommonModule } from '@angular/common';
import { MemoryDbService } from '../../../shared/services/memory-db.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  db$:Observable<DbStruct>;

  constructor(private dbService:MemoryDbService) {
    this.db$ = dbService.All;
  }

}
