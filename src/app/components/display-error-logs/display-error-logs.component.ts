import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadErrors } from 'src/app/state/actions/errorLogs.action';

@Component({
  selector: 'app-display-error-logs',
  templateUrl: './display-error-logs.component.html',
  styleUrls: ['./display-error-logs.component.css'],
})
export class DisplayErrorLogsComponent {
  produts!: any[];
  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(loadErrors());
    this.store.subscribe((data: any) => {
      console.log(data.data.data.products);
      this.produts = data.data.data.products;
    });
  }
}
