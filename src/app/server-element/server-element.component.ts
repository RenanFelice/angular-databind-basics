import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild,
  ElementRef,
  ContentChild
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {
  // @Input() element: { name: string, type: string, content: string };
  @Input() name: string;
  @ViewChild("heading", { static: true }) header: ElementRef;
  @ContentChild("contentParagraph", { static: true }) paragraph: ElementRef;

  constructor() {
    console.log("o construtor é o primeiro a ser chamado");
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("ngOnChanges roda quando algum input é alterado, porém ele roda uma primeira vez antes do ngOnInit", changes);
  }

  ngOnInit(): void {
    console.log("ngOnInit é chamado após o componente ser construído");
    console.log("ngOnInit header >>", this.header.nativeElement.textContent);
    console.log("ngOnInit paragraph >>", this.paragraph.nativeElement.textContent);
  }

  ngDoCheck() {
    console.log("ngCheck é chamado sempre que o angular for checar alguma mudança");
  }

  ngAfterContentInit() {
    console.log("ngAfterContentInit chamado após o ngContent ser inicializado");
  }

  ngAfterContentChecked() {
    console.log("ngAfterContentChecked é chamado após qualquer ciclo de detecção de mudança");
  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit chamado");
    console.log("ngAfterViewInit header >>", this.header.nativeElement.textContent);
    console.log("ngAfterViewInit paragraph >>", this.paragraph.nativeElement.textContent);
  }

  ngAfterViewChecked() {
    console.log("ngAfterViewChecked chamado");
  }

  ngOnDestroy() {
    console.log("ngOnDestroy é chamado quando o ciclo de vida do componente acaba");
  }
}
