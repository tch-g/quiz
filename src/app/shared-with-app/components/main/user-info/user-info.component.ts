import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ControlContainer, FormControl, FormGroup } from '@angular/forms';
import { slowSlide } from 'src/app/shared/animations/slow-slide.animation';
import { slideUp } from '../../../../shared/animations/slide-up.animation';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
  animations: [slideUp, slowSlide],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserInfoComponent implements OnInit {
  public form!: FormGroup;

  @Output() submitted = new EventEmitter();

  constructor(private cc: ControlContainer) { }

  ngOnInit(): void {
    this.form = this.cc.control as FormGroup;
  }

  submit(): void {
    this.submitted.emit();

  }

  get name(): FormControl {
    return this.form.get('name') as FormControl;
  }

}