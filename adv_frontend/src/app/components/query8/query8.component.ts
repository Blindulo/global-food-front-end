import { Component, OnInit } from '@angular/core';
import { Result } from 'src/app/models/Result';
import { Query } from 'src/app/models/Query';
import { HttpService } from '../../services/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-query8',
  templateUrl: './query8.component.html',
  styleUrls: ['./query8.component.css']
})
export class Query8Component implements OnInit {
  mysqlResults: Result[];
  mongodbResults: Result[];
  neo4jResults: Result[];
  query: Query = {
    team: '',
    data: '',
    player: '',
    performance: '',
    conf: '',
    time: '',
  }
  constructor(
    private httpService: HttpService,
    private router: Router,
  ) { }
  ngOnInit() {
  }
  onSubmit({ value }: { value: Query }) {
      this.httpService.mysql_query_8(this.query).subscribe(results => {
        this.mysqlResults = results;
      });
      this.httpService.mongodb_query_8(this.query).subscribe(results => {
        this.mongodbResults = results;
      });
      this.httpService.neo4j_query_8(this.query).subscribe(results => {
        this.neo4jResults = results;
      });
    }
}

