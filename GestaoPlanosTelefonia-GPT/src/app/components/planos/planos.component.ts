import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PlanoService } from '../../services/plano.service';

@Component({
  selector: 'app-planos',
  standalone: true,
  imports: [ FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './planos.component.html',
  styleUrl: './planos.component.css'
})
export class PlanosComponent {
  idButton = "button1";

  planos: any[] =[];
  planoForm: FormGroup;
  planoFormEdicao: FormGroup

  constructor(private planoService: PlanoService, private fp: FormBuilder, private pe: FormBuilder){
    this.planoForm = this.fp.group({
      Nome: [''],
      Preco: [''],
      FranquiaDados: [''],
      MinutosLigacao: ['']
    }),

    this.planoFormEdicao = this.pe.group({
      Nome: [''],
      Preco: [''],
      FranquiaDados: [''],
      MinutosLigacao: ['']
    })
  };

  ngOnInit(): void {
    this.carregarPlanos();
  }

  submitPlano(){
    const planoData = this.planoForm.value;

    console.log(this.planoForm.value);

    this.planoService.addPlano(planoData).subscribe({
      next: (dados) =>{
        this.carregarPlanos();
      },
      error: (erro) => {
        console.error('Erro ao buscar clientes:', erro);
      }
    })
  }

  ExcluirCliente(id: string){
    this.planoService.deletePlano(id).subscribe({
      next: (dados) =>{
        this.carregarPlanos();
      },
      error: (erro) => {
        console.error('Erro ao buscar clientes:', erro);
      }
    })
  }

  carregarPlanos(){
    this.planoService.getPlanos().subscribe({
      next: (dados) => {
        console.log(dados);
        this.planos = dados;        
      },
      error: (erro) => {
        console.error('Erro ao buscar clientes:', erro);
      }
    })
  }

  exibirMensagem() {
    console.log("teste");
  }

  mostrarEdicao = false;

  alterarPlano(id: string, nome: string, preco: number, franquia: number, minutos: number){
    this.mostrarEdicao = true;
    
    this.planoFormEdicao = this.pe.group({
      ID: id,
      Nome: nome,
      Preco: preco,
      FranquiaDados: franquia,
      MinutosLigacao: minutos
    })
  }

  cancelarEdicao(){
    this.mostrarEdicao = false;
  }

  salvarAlteracao(){
    this.mostrarEdicao = false;

    this.planoService.updatePlano(this.planoFormEdicao.value.ID, this.planoFormEdicao.value).subscribe({
      next: (dados) => {
        console.log(dados);
        this.planos = dados;
        this.carregarPlanos();
      },
      error: (erro) => {
        console.error('Erro ao buscar clientes:', erro);
      }
    })
  }

  formatarPreco() {
    debugger;
    let valor = this.planoForm.value.Preco || '';
    
    valor = valor.replace(/[^0-9.,]/g, '');
    
    valor = valor.replace(/\./g, ',');
    
    const partes = valor.split(',');
    if (partes.length > 2) {
      valor = partes[0] + ',' + partes.slice(1).join('');
    }

    this.planoForm = this.pe.group({
      Preco: valor,
    })
  }
}