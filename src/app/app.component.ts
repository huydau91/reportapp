import { Component } from '@angular/core';
import { DATA_SIMPLE_LINE_CHART, DATA_SIMPLE_BAR_CHART, DATA_LINE_AREA_CHART, DATA_MULTI_LINE_BAR_CHART } from './data';
import { DATA_BIOPOlAR_LINE_CHART, DATA_STACKED_BAR_CHART, DATA_SIMPLE_PIE_CHART, DATA_DONUT_CHART } from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  DATA_SINGLE_LINE_CHART: any[];
  DATA_SIMPLE_BAR_CHART: any[];

  view: any[] = [600, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  showYAxisLabel = true;
  explodeSlices = false;
  doughnut = false;
  showLabels = true;
  // SIMLE_LINE_CHART: SLC
  SLC_xAxisLabel = 'Simple line chart';
  SLC_yAxisLabel = 'Simple line chart';

  // SIMPLE_BAR_CHART: SBC
  SBC_xAxisLabel = 'Simple bar chart';
  SBC_yAxisLabel = 'Simple bar chart';

  // SIMPLE_LINE_AREA_CHART: SLA
  SLA_xAxisLabel = 'Simple line area';
  SLA_yAxisLabel = 'Simple line area';

  // MULTI_LINE_BAR_CHART: MLB
  MLB_xAxisLabel = 'Multi-line bar';
  MLB_yAxisLabel = 'Multi-line bar';

  // MULTI_LINE_BAR_CHART: BPL
  BPL_xAxisLabel = 'Bio-polar line';
  BPL_yAxisLabel = 'Bio-polar line';

  // STACKED_BAR_CHART: STC
  STC_xAxisLabel = 'Stacked bar chart';
  STC_yAxisLabel = 'Stacked bar chart';

  // // SIMPLE_PIE_CHART: SPC
  // SPC_xAxisLabel = 'Simple pie chart';
  // SPC_yAxisLabel = 'Simple pie chart';

  // // DONUT_CHART: DC
  // DC_xAxisLabel = 'Donut chart';
  // DC_yAxisLabel = 'Donut chart';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  // line, area
  autoScale = false;

  constructor() {
    Object.assign(this, { DATA_SIMPLE_LINE_CHART, DATA_SIMPLE_BAR_CHART, DATA_LINE_AREA_CHART, DATA_MULTI_LINE_BAR_CHART });
    Object.assign(this, { DATA_BIOPOlAR_LINE_CHART, DATA_STACKED_BAR_CHART, DATA_SIMPLE_PIE_CHART, DATA_DONUT_CHART })
  }

  onSelect(event) {
    console.log(event);
  }
}
