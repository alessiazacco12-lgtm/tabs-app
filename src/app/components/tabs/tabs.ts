// Questo file contiene la logica del componente Tabs. Gestisce quale tab è attivo e aggiorna il contenuto mostrato quando l'utente seleziona un tab.

// FASE 1 - IMPORT -- Importo Component e signal.
import { Component, signal } from '@angular/core';

// FASE 2 - CONFIGURAZIONE DEL COMPONENTE
@Component({
  selector: 'app-tabs',
  imports: [],
  templateUrl: './tabs.html',
  styleUrl: './tabs.css',
})
export class Tabs {
  // FASE 3 - TAB ATTIVO -- Il primo tab è attivo di default.
  activeTab = signal(1);

  // FASE 4 - SELEZIONE DEL TAB -- Quando l'utente clicca un tab, aggiorno il valore di activeTab.
  selectTab(tab: number) {
    this.activeTab.set(tab);
  }
}
