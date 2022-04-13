import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private status = false;

  constructor() { }

  show(): void {
    this.status = true;
  }

  hide(): void {
    this.status = false;
  }

  getStatus(): boolean {
    return this.status;
  }
}