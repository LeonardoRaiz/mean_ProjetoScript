import { Component } from "@angular/core";

@Component({
    selector: 'app-post-create',
    templateUrl: './post-create.component.html'
})

export class PostCreateComponent {

    newPost = 'Sem comentários';


    onAddPost() {
        alert("Post salvo")
    }
}

