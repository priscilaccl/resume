import { Component } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.less']
})
export class ResumeComponent {
  
  src: string  = 'assets/pdf/resume.pdf';
  
  constructor() {
    
  }
  
}
