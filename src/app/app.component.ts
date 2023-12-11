import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  constructor(private appService: AppService) {}
  title = 'angular-msw';
  users: Array<{ name: string }> = [];

  ngOnInit(): void {
    this.appService.getUsers().subscribe((data) => {
      this.users = data;
    });
  }
}
