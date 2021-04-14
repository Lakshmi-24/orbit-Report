import { Component, OnInit ,Input } from '@angular/core';
import { Satellite } from '../satellite';

@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {
  @Input() satellites: Satellite[];
  types:string[] = [
    "Space Debris",
    "Communication",
    "Probe",
    "Positioning",
    "Space Station",
    "Telescope"
  ];
  //countarray: number[] =[0,0,0,0,0,0];
  
  constructor() { }

  ngOnInit(): void {
  }

  satelliteCount(satellites: Satellite[],type:string): number{
    let count =0;
    for(let i=0;i<satellites.length;i++){
      if(satellites[i].type.toLowerCase()===type.toLowerCase()){
        count++;
      }
  }
  return count;
  }

}
