import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { JobServiceProvider } from '../../providers/job-service/job-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  jobList = []

  constructor(
    public navCtrl: NavController, 
    private jobService: JobServiceProvider) 
  {
    this.getJobs();

  }

  getJobs() {
    this.jobService.getJobs().subscribe(data => this.jobList=data);
  }

}
