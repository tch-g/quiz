export class SetName {
    static readonly type = '[User] Set Name';
    constructor(public name: string) {}
  }
  
  export class IncrementScore {
    static readonly type = '[User] Increment Score';
  }
  
  export class ResetScore {
    static readonly type = '[User] Reset Store';
  }