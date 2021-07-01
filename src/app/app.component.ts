import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  title = 'world111';
  myStyle = 'color: green';
  @ViewChild('box1') boxOne?: ElementRef;
  constructor(private renderer: Renderer2) {}

 ngOnInit() {
  // when TS will be inititalized
 }
  
 ngAfterViewInit() {
   // when HTML will be rendered
   const element = this.boxOne?.nativeElement;

  //  this.renderer.listen(element, 'mouseenter', (event) => {
  //   this.renderer.setStyle(element, 'background-color', 'limegreen');
  //  });
  //  this.renderer.listen(element, 'mouseleave', (event) => {
  //   this.renderer.setStyle(element, 'background-color', 'cadetblue');
  //  });

 }

 ngOnDestroy() {
 // component will be detached/removed from the tree
 }





  sayName(e: Event) {
    let element: any = e.target as HTMLInputElement;
    if (element.value) {
      this.title = element.value;
    }
  }

  
}
