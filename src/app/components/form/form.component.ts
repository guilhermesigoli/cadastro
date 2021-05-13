import { RegisterService } from './../../services/register.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  public form: FormGroup;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly registerService: RegisterService
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      age: [''],
      image: [''],
    });
  }

  savePerson() {
    if (this.form.get('name').value === '') {
      alert('Não é possível cadastrar uma pessoa sem o nome');
    } else {
      if (this.form.get('image').value === '') {
        this.form
          .get('image')
          .setValue(
            'https://www.petz.com.br/blog/wp-content/uploads/2020/08/cat-cafe-pet.jpg'
          );
      }
      this.registerService.addPerson(this.form.value);
      this.form.reset();
    }
  }
}
