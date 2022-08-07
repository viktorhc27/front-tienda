import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SesionService } from 'src/app/services/sesion/sesion.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [SesionService]
})
export class LoginComponent implements OnInit {
  form_login: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private _login: SesionService,
    private router: Router,
  ) {
    this.form_login = this.formBuilder.group({
      correo: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  login() {
    //if (this.form_login.valid) {
      console.log(this.form_login.value);
      
      this._login.login(this.form_login.value).subscribe((res: any) => {
        console.log(res);
        this._login.saveSesion(res.token, res.id, res.email, res.rol)
        if (res.rol == 1) {
          this.router.navigate(['/productos']);
        } else {
          this.router.navigate(['/home']);
        }
      })
    //}


  }

}
