import { Injectable } from '@angular/core';

@Injectable()
export class LifeCyclehooksService {
  lCHooks: string[];

  constructor() {
    this.lCHooks = [];
  }

}
