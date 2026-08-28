// Questo file contiene la logica del componente Tabs.
// Gestisce quale tab è attivo e aggiorna il contenuto mostrato quando l'utente seleziona un tab.

// FASE 1 - IMPORT -- Importo Component, signal e i dati dei tab.
import { Component, signal } from '@angular/core';
import { TABS } from './tabs-data';

// FASE 2 - CONFIGURAZIONE DEL COMPONENTE
@Component({
  selector: 'app-tabs',
  imports: [],
  templateUrl: './tabs.html',
  styleUrl: './tabs.css',
})
export class Tabs {
  // FASE 3 - DATI DEI TAB
  tabs = TABS;

  // FASE 4 - TAB ATTIVO -- Il primo tab è attivo di default.
  activeTab = signal(0);

  // FASE 5 - SELEZIONE DEL TAB -- Aggiorno l'indice del tab selezionato.
  selectTab(index: number) {
    this.activeTab.set(index);
  }
}
