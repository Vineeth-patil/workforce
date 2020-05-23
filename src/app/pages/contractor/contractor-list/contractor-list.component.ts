import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import {Contractor} from 'src/app/contractor';
import { AppService } from 'src/app/utils/services/app.service';




@Component({
  selector: 'app-contractor-list',
  templateUrl: './contractor-list.component.html',
  styleUrls: ['./contractor-list.component.scss']
})
export class ContractorListComponent implements OnInit {
 
  
  events=null;
  contractors = [
    new Contractor(1, 'Alexander','Pierce','assets/img/user2-160x160.jpg','Alex@gmail.com','99999','USA'),
    new Contractor(2, 'Nicholas','Henry','assets/img/user3-128x128.jpg','Alex@gmail.com','99999','USA'),
    new Contractor(3, 'Alex','Pierce','assets/img/user4-128x128.jpg','Alex@gmail.com','99999','USA'),
    new Contractor(4, 'Alex','Hales','assets/img/user5-128x128.jpg','Alex@gmail.com','99999','USA'),
    new Contractor(1, 'Alexander','Pierce','assets/img/user2-160x160.jpg','Alex@gmail.com','99999','USA'),

  ];
  constructor(private route: ActivatedRoute,private api:AppService, private router: Router) {
   
   }
   ngOnInit() {
   
  }
}
