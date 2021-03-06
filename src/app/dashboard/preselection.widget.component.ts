import { Component, OnInit, NgModule } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'widget-preselection',
  templateUrl: './preselection.widget.component.html',
  styleUrls: ['./default.widget.component.css']
})
@NgModule({})
export class PreselectionWidgetComponent implements OnInit {

  constructor() { }

  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true,
    maintainAspectRatio: false,
  };
  public barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType = 'bar';
  public barChartLegend = true;

  public barChartData: any[] = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  ];

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  ngOnInit() {
  }

}
