import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Tecnico } from 'src/app/models/tecnico';
//import { TecnicoService } from 'src/app/services/tecnico.service';

@Component({
  selector: 'app-tecnico-list',
  templateUrl: './tecnico-list.component.html',
  styleUrls: ['./tecnico-list.component.css']
})
export class TecnicoListComponent implements OnInit {

  ELEMENT_DATA: Tecnico[] = [
    {
      id: 1,
      nome: 'teste',
      cpf: '123',
      email: 'teste@gmail.com',
      senha: '123',
      perfis: ['0'],
      dataCriacao: '15/10/15'
    },
    {
      id: 2,
      nome: 'teste2',
      cpf: '123',
      email: 'teste@gmail.com',
      senha: '123',
      perfis: ['0'],
      dataCriacao: '15/10/15'
    },
    {
      id: 2,
      nome: 'oi',
      cpf: '123',
      email: 'oi@gmail.com',
      senha: '123',
      perfis: ['0'],
      dataCriacao: '15/10/15'
    }
  ]

  displayedColumns: string[] = ['id', 'nome', 'cpf', 'email', 'acoes'];
  dataSource = new MatTableDataSource<Tecnico>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    
    
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}