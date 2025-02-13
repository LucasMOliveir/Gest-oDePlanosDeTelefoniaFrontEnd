import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import { MatCard } from '@angular/material/card'
import { MatCardContent } from '@angular/material/card'
import { MatCardTitle } from '@angular/material/card'
import { MatCardSubtitle } from '@angular/material/card'

@Component({
  selector: 'app-planos',
  standalone: true,
  imports: [ MatInputModule, MatButtonModule, FormsModule, MatCard, MatCardContent, MatCardTitle, MatCardSubtitle],
  templateUrl: './planos.component.html',
  styleUrl: './planos.component.css'
})
export class PlanosComponent {
  idButton = "button1";

  exibirMensagem() {
    console.log("teste");
  }
}