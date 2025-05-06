import Controller from '@ember/controller';
import { action } from '@ember/object';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import ENV from 'home/config/environment';

export default class TroubleshootingController extends Controller {
    @tracked selectedVideoFileName = null; 
    uploadedVideoUrl = null;
    @service store;

    @action
    async handleVideoUpload(file) {
        this.selectedVideoFileName = file.name;
        try {
            let response = await file.upload(ENV.TribeENV.API_URL + '/uploads.php')
                .then((res) => res.json());

            console.log("before temporary store" + " " + response.file.url);
            this.uploadedVideoUrl = response.file.url;
            console.log("after temporary store" + " " + this.uploadedVideoUrl)
        }
        catch (response) {
            console.error(`File upload failed: ${response}`);
        }
    }

    @action
    async inputData() {

        let userName = document.getElementById("name");
        let userExpectedBehavior = document.getElementById("expectedBehavior");
        let userActualBehavior = document.getElementById("actualBehavior");
        let userOperatingSystem = document.getElementById("operatingSystem");
        let userWebBrowser = document.getElementById("webBrowser");
        let issueVideos = document.getElementById("issueVideos")
        console.log(userName.value)
        console.log("After On Submiting" + " " + this.uploadedVideoUrl)

        let supportQueries = await this.store.createRecord('bug', {    
            modules: {
                user: userName.value,
                actual_behavior: userActualBehavior.value,  
                content_privacy: 'public',
                web_browser: userWebBrowser.value,
                operatingsystem: userOperatingSystem.value,
                expected_behavior: userExpectedBehavior.value,
                file_uploader: this.uploadedVideoUrl,
            },
        });

        // console.log(supportQueries) 
        await supportQueries.save()

        userName.value = "";
        userExpectedBehavior.value = "";
        userActualBehavior.value = "";
        userOperatingSystem.selectedIndex = 0;
        userWebBrowser.selectedIndex = 0;
        issueVideos.value = ""


        return supportQueries
    }
}
