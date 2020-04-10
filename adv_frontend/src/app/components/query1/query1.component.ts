import { Component, OnInit } from '@angular/core';
import { Result } from 'src/app/models/Result';
import { Query } from 'src/app/models/Query';
import { HttpService } from '../../services/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-query1',
  templateUrl: './query1.component.html',
  styleUrls: ['./query1.component.css']
})
export class Query1Component implements OnInit {
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
      this.httpService.mysql_query_1(this.query).subscribe(results => {
        this.mysqlResults = results;
        for(var i in this.mysqlResults){
          this.mysqlResults[i]["stDate"]=this.mysqlResults[i]["stDate"].substr(0,10);
        } 
      });
      this.httpService.mongodb_query_1(this.query).subscribe(results => {
        this.mongodbResults = results;
      });
      this.httpService.neo4j_query_1(this.query).subscribe(results => {
        this.neo4jResults = results;
      });
    }
}

