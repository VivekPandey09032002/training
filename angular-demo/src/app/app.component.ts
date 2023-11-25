import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, interval, map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  intervalSub!: Subscription;
  customSub!: Subscription;
  title = 'angular-demo';
  ngOnInit(): void {
    this.intervalSub = interval(1000).subscribe(() => {
      console.log('data changed');
    });

    let customObservale = Observable.create(
      (observer: {
        next: (arg0: number) => void;
        error: (arg0: string) => void;
        complete: () => void;
      }) => {
        let count = 5;
        setInterval(() => {
          if (count > 10) observer.complete();
          if (count < 0) observer.error('count is less than zero');
          if (count % 2) observer.next(++count);
          else {
            count -= 2;
            observer.next(count);
          }
        }, 1000);
      }
    );

    this.customSub = customObservale
      .pipe(map((data: number) => data * 2))
      .subscribe(
        (data: number) => {
          console.log(data);
        },
        (err: string) => console.log(err),
        () => console.log('complete')
      );
  }

  ngOnDestroy(): void {
    this.intervalSub.unsubscribe();
    this.customSub.unsubscribe();
  }
}
