// import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { ActivatedRoute } from '@angular/router';

// @Component({
//   selector: 'app-userinfo',
//   templateUrl: './userinfo.component.html',
//   styleUrls: ['./userinfo.component.css']
// })
// export class UserinfoComponent implements OnInit{
//   users: any = null;
//   id: any;
//   usersloaded=false;
//   constructor(private http: HttpClient, private route: ActivatedRoute) {}

//   ngOnInit(): void {
//     this.route.params.subscribe((params) => {
//       this.id = params['id'];
//       this.getData(this.id);
//     });
//   }

//   async getData(id: number) { // Accept id parameter here
//     try {
//       const data = await this.http
//         .get<any>(`https://reqres.in/api/users/${id}`)
//         .toPromise();
//       this.users = data;
//     console.log(this.users);

//     } catch (error) {
//       console.error('Error fetching user data:', error);
//     }
//   }
// }
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css']
})
export class UserinfoComponent implements OnInit {
  users: any = null;
  id: any;
  usersLoaded = false;

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
      this.getData(this.id);
    });
  }

  async getData(id: number) {
    try {
      const data = await this.http
        .get<any>(`https://reqres.in/api/users/${id}`)
        .toPromise();
      this.users = data;
      setTimeout(() => {
        this.usersLoaded = true; // Set usersLoaded to true after 1000 milliseconds
      }, 500);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  }
}
