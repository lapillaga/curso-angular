import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBtnLoading]'
})
export class BtnLoadingDirective {

  textInitial: string = '';
  loading: boolean = false;

  @Input() textInput: string = '';

  constructor(
    private elementRef: ElementRef<HTMLButtonElement>,
    private renderer: Renderer2
  ) { }

  ngOnInit() {
    this.textInitial = this.elementRef.nativeElement.innerHTML;
    this.renderer.addClass(this.elementRef.nativeElement, 'btn-outline-primary');
    this.renderer.setProperty(this.elementRef.nativeElement, 'innerHTML', this.textInput);
  }

  @HostListener('click', ['$event'])
  onClick() {
    if (this.loading) {
      this.renderer.setProperty(this.elementRef.nativeElement, 'innerHTML', '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>Loading');
    } else {
      this.renderer.setProperty(this.elementRef.nativeElement, 'innerHTML', this.textInitial);
    }

    this.loading = !this.loading;
  }

  @HostListener('mouseenter', ['$event'])
  onMouseEnter() {
    this.renderer.removeClass(this.elementRef.nativeElement, 'btn-outline-primary');
    this.renderer.addClass(this.elementRef.nativeElement, 'btn-outline-secondary');
  }

  @HostListener('mouseleave', ['$event'])
  onMouseLeave() {
    this.renderer.removeClass(this.elementRef.nativeElement, 'btn-outline-secondary');
    this.renderer.addClass(this.elementRef.nativeElement, 'btn-outline-primary');
  }
}
