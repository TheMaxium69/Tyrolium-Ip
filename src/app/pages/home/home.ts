import { Component, inject, signal, computed, ViewEncapsulation, OnInit } from '@angular/core';
import { TyroUiLangService } from 'tyrolium-ui';

interface IpResponse {
  ip: string;
}

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
  encapsulation: ViewEncapsulation.None,
})
export class Home implements OnInit {
  readonly lang = inject(TyroUiLangService).lang;

  ip = signal<string | null>(null);
  loading = signal(true);
  error = signal(false);

  readonly ipChars = computed(() => (this.ip() ?? '').split(''));

  ngOnInit() {
    fetch('https://ip.tyrolium.fr/?api=test')
      .then(r => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.json();
      })
      .then((data: IpResponse) => {
        if (!data?.ip) throw new Error('missing ip in response');
        this.ip.set(data.ip);
      })
      .catch(() => {
        this.error.set(true);
      })
      .finally(() => {
        this.loading.set(false);
      });
  }
}
