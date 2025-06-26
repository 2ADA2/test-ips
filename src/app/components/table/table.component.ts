import {Component} from '@angular/core'
import {Route, routes} from "../../utils/tableData";

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {
  public tdata: Route[] = routes
  public sortType: string = ""
  public isDown: boolean = false

  sortTable(type: string) {
    if (this.sortType == type) {
      this.isDown = !this.isDown;
      this.tdata = this.tdata.slice().reverse()
      return
    }
    this.isDown = true;
    this.sortType = type

    let newTable: Route[] = this.tdata.slice()
    switch (type) {
      case "address":
        newTable.sort((a: Route, b: Route) => {
          return (a.address > b.address) ? 1 : -1
        })
        break;
      case "gateway":
        newTable.sort((a: Route, b: Route) => {
          return (a.gateway > b.gateway) ? 1 : -1
        })
        break;
      case "interface":
        newTable.sort((a: Route, b: Route) => {
            return (a.interface > b.interface) ? 1 : -1
          }
        )
        break;
    }
    this.tdata = newTable
  }

}
