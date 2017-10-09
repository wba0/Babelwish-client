import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthApiService } from '../../services/auth-api.service';
import { JobsApiService } from '../../services/jobs.service';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
	userInfo: any = {};
	getUserError: string;
	ownedJobs: any = [];
	ownedActiveJobs: any;
	workingJobs: any;
	awaitingPaymentJobs: any;
	finishedJobs: any;
	langArr: any[] = this.languageService.languages;
	jobCounts: any =[];
  constructor(
		private authenticator: AuthApiService,
		private jobsApi: JobsApiService,
		private languageService: LanguageService
	) { }


  ngOnInit() {
		// const firstPart = this.langArr.filter(item => item.language === this.ownedJobs.sourceLanguage)
		// console.log("first part" , firstPart );
		//
		//


		this.authenticator.getLoginStatus()
			.subscribe(
				(loggedInInfo: any) => {
					if(loggedInInfo.isLoggedIn) {
						console.log("logged in info: ", loggedInInfo)
						this.userInfo = loggedInInfo.userInfo;
					}
				}
			);

			this.jobsApi.getMyOwnedJobs()
				.subscribe(
					(ownedJobs: any) => {
						this.ownedJobs = ownedJobs;
							this.languageService.addIsoCode(this.ownedJobs);
							console.log(this.ownedJobs)
					}
				);

			this.jobsApi.getMyOwnedActiveJobs()
				.subscribe(
					(ownedActiveJobs: any) => {
						this.ownedActiveJobs = ownedActiveJobs;
					}
				);

			this.jobsApi.getMyWorkingJobs()
				.subscribe(
					(workingJobs: any) => {
						this.workingJobs = workingJobs;
						this.jobCounts.workingJobs = this.workingJobs.length;
						console.log(this.jobCounts.workingJobs)
					}
				);
			this.jobsApi.getMyAwaitingPaymentJobs()
				.subscribe(
					(awaitingPaymentJobs: any) => {
						this.awaitingPaymentJobs = awaitingPaymentJobs;
					}
				);
			this.jobsApi.getMyFinishedJobs()
				.subscribe(
					(finishedJobs: any) => {
						this.finishedJobs = finishedJobs;
					}
				);
  }


		acceptOrReject(jobId: string, applicantId: string, decision: string){
			this.jobsApi.acceptOrRejectApplicant(jobId, applicantId, decision)
				.subscribe(
					(data) => {
						console.log(data);
					}
				);
		}
}
