import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class IndexController extends Controller {
    @tracked selectedItem = null;
    items = [
        { id: 1, title: "Text", imageUrl: "/assets/img/text.png" },
        { id: 2, title: "Textarea", imageUrl: "/assets/img/textarea.png" },
        { id: 3, title: "Rich text editor", imageUrl: "/assets/img/reachtextarea.png" },
        { id: 4, title: "Select", imageUrl: "/assets/img/select.png" },
        { id: 5, title: "URL", imageUrl: "/assets/img/url.png" },
        { id: 6, title: "Password", imageUrl: "/assets/img/password.png" },
        { id: 7, title: "Hidden", imageUrl: "/assets/img/hidden.png" },
        { id: 8, title: "Email address", imageUrl: "/assets/img/email.png" },
        { id: 9, title: "Phone number", imageUrl: "/assets/img/phonenumber.png" },
        { id: 10, title: "Number", imageUrl: "/assets/img/number.png" },
        { id: 11, title: "Date and time", imageUrl: "/assets/img/dateandtime.png" },
        { id: 12, title: "Date only", imageUrl: "/assets/img/date.png" },
        { id: 13, title: "Time only", imageUrl: "/assets/img/time.png" },
        { id: 14, title: "File uploader", imageUrl: "/assets/img/fileuploader.png" },
        { id: 15, title: "Color", imageUrl: "/assets/img/color.png" },
        { id: 16, title: "Checkbox", imageUrl: "/assets/img/checkbox.png" }
    ];


    @action
    showImage(item) {
        this.selectedItem = item;
    }








    // @action
    // showVideo() {
    //     let headText = document.getElementById('htext')
    //     let videoOne = document.getElementById('video1')

    //     headText.classList.replace("d-block", "d-none");
    //     videoOne.classList.replace("d-none", "d-block")


    // }
}
