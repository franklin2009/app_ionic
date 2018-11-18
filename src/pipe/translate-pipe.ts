
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class TranslatePipe {

  data: any;
  constructor(private http: HttpClient) {}

  use(lang: string): Promise<{}> {
    return new Promise<{}>((resolve, reject) => {
      try{
        const path = `./assets/i18n/lang.${ lang || 'es' }.json`;
        this.http.get<{}>(path).subscribe(
          translation => {
            this.data = Object.assign({}, translation || {});
            resolve(this.data);
          },
          error=>{
            this.data = {};
            reject(this.data);
          }
        );
      } catch(e){
        this.data = {};
        reject(this.data);
      }
    });
  }

}
