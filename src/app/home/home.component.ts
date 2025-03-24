import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

//   username:string|null=''
// constructor(private route:  ActivatedRoute,private router:Router){}
// ngOnInit(){
//   this.username=this.route.snapshot.paramMap.get('name')
//   console.log(this.username);

// }

// goToLog(){
// this.router.navigate(['/login'])
// }



// build Dynamic Routes

users=[
  {
    id:'1',
    name:'shanmugam',
    age:22,
    email:"shanmugam@gmail.com"
  },
  {
    id:'2',
    name:'steve rogers',
    age:128,
    email:"steve@gmail.com"
  },
  {
    id:'3',
    name:'tony stark',
    age:45,
    email:"stark@gmail.com"
  },
  {
    id:'4',
    name:'bruce banner',
    age:48,
    email:"banner@gmail.com"
  }
]
}
