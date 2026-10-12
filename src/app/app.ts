import { Component, signal, WritableSignal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
   selector: 'app-root',
   imports: [RouterOutlet, RouterLink],
   templateUrl: './app.html',
   styleUrl: './app.scss'
})
export class App {
   public readonly toggle: WritableSignal<boolean> = signal<boolean>(false);

   public toggleMenu(): void {
      this.toggle.update((toggled: boolean) => !toggled);
   }
}
