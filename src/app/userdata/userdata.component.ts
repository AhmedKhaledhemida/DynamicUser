
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-userdata',
  templateUrl: './userdata.component.html',
  styleUrls: ['./userdata.component.css'],
})
export class UserdataComponent implements OnInit {
  users: any[] = [];
  currentPage: number = 1;
  totalPages: number = 0;
  usersLoaded = false;
  cache: { [page: number]: any[] } = {};

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.delayedGetData();
  }

  async delayedGetData() {
    setTimeout(() => {
      this.getData();
    }, 500);
  }

  async getData() {
    if (this.cache[this.currentPage]) {

      this.users = this.cache[this.currentPage];
      this.usersLoaded = true;
    } else {
      try {
        const response = await this.http
          .get<any>(`https://reqres.in/api/users?page=${this.currentPage}`)
          .toPromise();
        this.users = response.data;
        this.totalPages = response.total_pages;
        this.usersLoaded = true;

        this.cache[this.currentPage] = response.data;
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.getData();
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.getData();
    }
  }
}
