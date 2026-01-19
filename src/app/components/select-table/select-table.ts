import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import { Router } from '@angular/router';
import { InputText } from 'primeng/inputtext';


@Component({
  selector: 'app-select-table',
  imports: [CardModule, CommonModule, ButtonModule, InputTextModule, FormsModule, DialogModule, InputText],
  templateUrl: './select-table.html',
  styleUrl: './select-table.css'
})
export class SelectTable {
  mesas: number[] = Array.from({ length: 50 }, (_, i) => i + 1);
  searchTerm = signal('');
  addMesaDialog = signal(false);
  newMesaNumber = signal('');
  dialogMessage = signal('');
  dialogMessageType = signal<'error' | 'warn' | 'success' | ''>('');
  private router = inject(Router);

  addMesa() {
    this.addMesaDialog.set(true);
    this.newMesaNumber.set('');
    this.dialogMessage.set('');
    this.dialogMessageType.set('');
  }

  confirmAddMesa() {
    const num = Number(this.newMesaNumber());
    if (!Number.isFinite(num) || num < 1) {
      this.dialogMessage.set('Número de mesa inválido');
      this.dialogMessageType.set('error');
      return;
    }
    if (this.mesas.includes(num)) {
      this.dialogMessage.set('La mesa ya existe');
      this.dialogMessageType.set('warn');
      this.newMesaNumber.set('');
      return;
    }
    this.mesas.push(num);
    this.mesas.sort((a, b) => a - b);
    this.dialogMessage.set(`Mesa ${num} agregada correctamente`);
    this.dialogMessageType.set('success');
    setTimeout(() => {
      this.addMesaDialog.set(false);
      this.newMesaNumber.set('');
      this.dialogMessage.set('');
      this.dialogMessageType.set('');
    }, 1500);
  }

  onSearchChange() {
    // Solo filtra, no navega
  }

  buscarMesa() {
    if (!this.searchTerm().trim()) return;
    const mesa = Number(this.searchTerm());
    if (!Number.isFinite(mesa) || mesa < 1) return;
    if (!this.mesas.includes(mesa)) return;
    this.selectMesa(mesa);
  }

  get mesasFiltradas(): number[] {
    if (!this.searchTerm().trim()) return this.mesas;
    const searchStr = this.searchTerm().trim();
    return this.mesas.filter((m) => m.toString().includes(searchStr));
  }

  selectMesa(mesa: number) {
    this.router.navigate(['/comanda'], { queryParams: { mesa } });
  }
}