import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject} from '@angular/core';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, TranslateModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
}
)

export class ContactComponent  {
 
  http = inject(HttpClient);

  post = {
    endPoint: 'https://takoua-jelassi.com/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text' as 'json',
      },
    },
  };

  contactData = {
    name: "",
    email: "",
    message: "",
    isAgree: false,
  }

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData), this.post.options)
        .subscribe(
          {
            next: (resp) => {
              alert('Your email has been sent successfully!')
              ngForm.resetForm();
            },
            error: (err) => {
              console.error('Failed to send email:', err);
            },
            complete: () => console.info('send post complete')
          }
        );
    }
  }
}





