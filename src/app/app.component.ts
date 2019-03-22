import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assetIntelligence';
  model = {
    headers: [
      { title: '', accessor: 'id', index: 0 },
      { title: 'Missed Care Tasks', accessor: 'missedCareTask', index: 1 },
      { title: 'Missed Meds', accessor: 'missedMeds', index: 2 },
      { title: 'Exceptions Charted', accessor: 'exceptionsCharted', index: 3 },
      { title: 'Action Plan to Complete', accessor: 'actionPlantoComplete', index: 4 },
      { title: 'Overdue Action Plan Items', accessor: 'overdueActionPlanItems', index: 5 },
      { title: 'Overdue Pending Verification', accessor: 'overduePendingVerification', index: 6 },
      { title: 'Expired Orders', accessor: 'expiredOrders', index: 7 }
    ],
    data: [
      {
        name: 'Acacia Court',
        missedCareTask: 29,
        missedMeds: 2,
        exceptionsCharted: 3,
        actionPlantoComplete: 5,
        overdueActionPlanItems: 6,
        overduePendingVerification: 2,
        expiredOrders: 3
      },
      {
        name: 'Shady Lanes',
        missedCareTask: 30,
        missedMeds: 2,
        exceptionsCharted: 3,
        actionPlantoComplete: 5,
        overdueActionPlanItems: 6,
        overduePendingVerification: 2,
        expiredOrders: 3
      },
      {
        name: 'Plano Commons',
        missedCareTask: 29,
        missedMeds: 4,
        exceptionsCharted: 3,
        actionPlantoComplete: 5,
        overdueActionPlanItems: 6,
        overduePendingVerification: 2,
        expiredOrders: 3
      },
      {
        name: 'Boulder Estates',
        missedCareTask: 29,
        missedMeds: 2,
        exceptionsCharted: 3,
        actionPlantoComplete: 5,
        overdueActionPlanItems: 6,
        overduePendingVerification: 2,
        expiredOrders: 3
      },
      {
        name: 'GPR test Prop',
        missedCareTask: 29,
        missedMeds: 2,
        exceptionsCharted: 3,
        actionPlantoComplete: 5,
        overdueActionPlanItems: 6,
        overduePendingVerification: 2,
        expiredOrders: 3
      },
      {
        name: 'Blue Ridge Acres',
        missedCareTask: 29,
        missedMeds: 2,
        exceptionsCharted: 3,
        actionPlantoComplete: 5,
        overdueActionPlanItems: 6,
        overduePendingVerification: 2,
        expiredOrders: 3
      },
      {
        name: 'Graydove Meadows',
        missedCareTask: 29,
        missedMeds: 2,
        exceptionsCharted: 3,
        actionPlantoComplete: 5,
        overdueActionPlanItems: 6,
        overduePendingVerification: 2,
        expiredOrders: 3
      },
      {
        name: "Steven's EHR Community",
        missedCareTask: 29,
        missedMeds: 2,
        exceptionsCharted: 3,
        actionPlantoComplete: 5,
        overdueActionPlanItems: 6,
        overduePendingVerification: 2,
        expiredOrders: 3
      },
      {
        name: 'Acacia Court',
        missedCareTask: 29,
        missedMeds: 2,
        exceptionsCharted: 3,
        actionPlantoComplete: 5,
        overdueActionPlanItems: 6,
        overduePendingVerification: 2,
        expiredOrders: 3
      },
      {
        name: 'Acacia Court',
        missedCareTask: 29,
        missedMeds: 2,
        exceptionsCharted: 3,
        actionPlantoComplete: 5,
        overdueActionPlanItems: 6,
        overduePendingVerification: 2,
        expiredOrders: 3
      },
      {
        name: 'Acacia Court',
        missedCareTask: 29,
        missedMeds: 2,
        exceptionsCharted: 3,
        actionPlantoComplete: 5,
        overdueActionPlanItems: 6,
        overduePendingVerification: 2,
        expiredOrders: 3
      },
      {
        name: 'Acacia Court',
        missedCareTask: 29,
        missedMeds: 2,
        exceptionsCharted: 3,
        actionPlantoComplete: 5,
        overdueActionPlanItems: 6,
        overduePendingVerification: 2,
        expiredOrders: 3
      },
      {
        name: 'Acacia Court',
        missedCareTask: 29,
        missedMeds: 2,
        exceptionsCharted: 3,
        actionPlantoComplete: 5,
        overdueActionPlanItems: 6,
        overduePendingVerification: 2,
        expiredOrders: 3
      },
      {
        name: 'Acacia Court',
        missedCareTask: 29,
        missedMeds: 2,
        exceptionsCharted: 3,
        actionPlantoComplete: 5,
        overdueActionPlanItems: 6,
        overduePendingVerification: 2,
        expiredOrders: 3
      },
      {
        name: 'Acacia Court',
        missedCareTask: 29,
        missedMeds: 2,
        exceptionsCharted: 3,
        actionPlantoComplete: 5,
        overdueActionPlanItems: 6,
        overduePendingVerification: 2,
        expiredOrders: 3
      }
    ]
  };

}
