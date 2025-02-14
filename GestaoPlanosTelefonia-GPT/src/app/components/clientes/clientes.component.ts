import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClienteService } from '../../services/cliente.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-clientes',
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  standalone: true,
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.css'
})
export class ClientesComponent {

  clientes: any[] = [];
  edicao = false;

  constructor(private clienteService: ClienteService, private fb: FormBuilder
    , private fe: FormBuilder
  ) {
    this.clienteForm = this.fb.group({
      NomeCompleto: [''],
      CPF: [''],
      Telefone: [''],
      Email: [''],
    });

    this.clienteFormEdicao = this.fe.group({
      ID: [''],
      NomeCompleto: [''],
      CPF: [''],
      Telefone: [''],
      Email: [''],
    });
  }

  ngOnInit(): void {
    this.carregarClientes();
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

  clienteForm: FormGroup;
  clienteFormEdicao: FormGroup;

  submitCliente(){
    const clienteData = this.clienteForm.value;

    this.clienteService.addCliente(clienteData).subscribe({
      next: (dados) =>{
        this.carregarClientes();
      },
      error: (erro) => {
        console.error('Erro ao buscar clientes:', erro);
      }
    })
  }
  
  ExcluirCliente(id: string){
    this.clienteService.deleteCliente(id).subscribe({
      next: (dados) =>{
        this.carregarClientes();
      },
      error: (erro) => {
        console.error('Erro ao buscar clientes:', erro);
      }
    })
  }

  mostrarCliente = false;

  AlterarCliente(id: string, nome: string, cpf: string, telefone: string, email: string){
    this.mostrarCliente = true;

    this.clienteFormEdicao = this.fe.group({
      ID: id,
      NomeCompleto: nome,
      CPF: cpf,
      Telefone: telefone,
      Email: email,
    }); 
  }
  salvarAlteracao(){
    this.mostrarCliente = false;
    
    this.clienteService.updateCliente(this.clienteFormEdicao.value.ID, this.clienteFormEdicao.value).subscribe({
      next: (dados) =>{
        this.carregarClientes();
      },
      error: (erro) => {
        console.error('Erro ao buscar clientes:', erro);
      }
    })
  }
  
  cancelarEdicao(){
    this.mostrarCliente = false;
  }

}