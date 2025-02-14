import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ClienteService } from '../../services/cliente.service';
import { PlanoService } from '../../services/plano.service';
import { ClientePlanoService } from '../../services/plano-cliente.service';

@Component({
  selector: 'app-planos-de-clientes',
  imports: [FormsModule, CommonModule],
  templateUrl: './planos-de-clientes.component.html',
  styleUrl: './planos-de-clientes.component.css'
})
export class PlanosDeClientesComponent {

  constructor(private clienteService: ClienteService,
     private planoService: PlanoService,
     private clientePlanoService: ClientePlanoService){}


     
  clientes: any[] = [];
  planos: any[] = [];
  clientePlanos: any[] = [];

  ngOnInit(): void {
    this.carregarClientePlano();
    this.carregarClientes();
    this.carregarPlanos();
  }

  carregarClientes() {
    this.clienteService.getClientes().subscribe({
      next: (dados) => {
        this.clientes = dados;        
      },
      error: (erro) => {
        console.error('Erro ao buscar clientes:', erro);
      }
    });
  }

  carregarPlanos(){
    this.planoService.getPlanos().subscribe({
      next: (dados) => {
        this.planos = dados;        
      },
      error: (erro) => {
        console.error('Erro ao buscar planos:', erro);
      }
    })
  }

  carregarClientePlano(){
    this.clientePlanoService.getPlanoClientes().subscribe({
      next: (dados) => {
        console.log(dados);
        this.clientePlanos = dados;        
      },
      error: (erro) => {
        console.error('Erro ao buscar planos de clientes:', erro);
      }
    });
  }

  ExcluirClientePlano(id: string){
    this.clientePlanoService.deletePlanoCliente(id).subscribe({
      next: (dados) =>{
        this.carregarClientePlano();
      },
      error: (erro) => {
        console.error('Erro ao buscar clientes:', erro);
      }
    })
  }

  clienteId: string = '';
  planoId: string ='';
  submitClientePlano(){
    const clientePlanoData = {
      ClienteID: this.clienteId,
      PlanoID: this.planoId
    }

    this.clientePlanoService.addPlanoCliente(clientePlanoData).subscribe({
      next: (dados) =>{
        this.carregarClientePlano();
      },
      error: (erro) => {
        console.error('Erro ao associar plano:', erro);
      }
    })
  }
}