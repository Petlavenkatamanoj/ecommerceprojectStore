import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [RouterModule],
  template: `
    <div class="h-screen flex flex-col justify-center items-center">
      <h1 class="text-4xl font-bold mb-4">Welcome to My Store 🛍️</h1>
      <a routerLink="/products" class="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">
        Explore 🔍
      </a>
    </div>
  `,
  styles: ``
})
export class WelcomeComponent { }
