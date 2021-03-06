import { Injectable } from '@angular/core';

@Injectable()
export class LanguageService {


  languages: any[] = [
    { language: "english", langDisplay: "English", isoCode: "us" },
    { language: "french", langDisplay: "Français", isoCode: "fr" },
    { language: "spanish", langDisplay: "Español", isoCode: "es" },
    { language: "chinese", langDisplay: "中文", isoCode: "cn" },
    { language: "portugese", langDisplay: "Português", isoCode: "pt" },
    { language: "japanese", langDisplay: "日本語", isoCode: "jp" },
    { language: "italian", langDisplay: "Italiano", isoCode: "it" },
    { language: "german", langDisplay: "Deutsch", isoCode: "de" },
    { language: "korean", langDisplay: "한국어", isoCode: "kr" }
  ];


  constructor() { }

  addIsoCode(jobArray) {
		if(jobArray === undefined){
				return;
		}

		if(typeof jobArray === "object"){
			jobArray = [].concat(jobArray);
		}
    jobArray.forEach((job) => {
      const matchedSource = this.languages.find(o => {
        return o.language === job.sourceLanguage;
      });
      job.sourceLanguageIsoCode = matchedSource.isoCode;
      const matchedTarget = this.languages.find(o => {
        return o.language === job.targetLanguage;
      });
      job.targetLanguageIsoCode = matchedTarget.isoCode;
    });
		}

	findIsoCodeFromLangDisplay(languageParam){
			return this.languages.find(o => o.langDisplay === languageParam).isoCode;
  }

}
