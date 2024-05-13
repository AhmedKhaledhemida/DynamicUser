// import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

// @Component({
//   selector: 'app-search',
//   templateUrl: './search.component.html',
//   styleUrls: ['./search.component.css']
// })
// export class SearchComponent implements OnInit{
//   user: any = null;
//   searchId: any;

//   constructor(private http: HttpClient) {}

//   ngOnInit(): void {
//   }

//   async search() {
//     if (!this.searchId) {
//       return ;
//     }
//     try {
//       const data = await this.http
//         .get<any>(`https://reqres.in/api/users/${this.searchId}`)
//         .toPromise();
//       this.user = data.data;
//     } catch (error) {
//       console.error('Error fetching user data:', error);
//       this.user = null;
//     }
//   }

// }

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{
  user: any = null;
  searchId: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
  }

  async search() {
    if (!this.searchId) {
      return; // Do not perform search if searchId is empty or not valid
    }
    try {
      const data = await this.http
        .get<any>(`https://reqres.in/api/users/${this.searchId}`)
        .toPromise();
      this.user = data.data; // Assuming the API response contains user details
    } catch (error) {
      console.error('Error fetching user data:', error);
      this.user = null; // Reset user if an error occurs
    }
  }

  clearSearchInfo() {
    this.user = null; // Reset user when clicking on any element in the searchinfo section
  }
}
