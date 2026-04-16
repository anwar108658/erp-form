import React from "react";
import ReportViewer from 'devexpress-reporting-react/dx-report-viewer';
import 'devextreme/dist/css/dx.light.css';
import '@devexpress/analytics-core/dist/css/dx-analytics.common.css';
import '@devexpress/analytics-core/dist/css/dx-analytics.light.css';
import 'devexpress-reporting/dist/css/dx-webdocumentviewer.css';

function DxReport() {
  return (
    <div style={{ height: "600px" }}> {/* set a fixed height */}
      <ReportViewer
        reportUrl="./TestReport.repx"  // exact file name
        height="100%"
         dataSource={{ Orders: [{ OrderID: 1, CustomerName: "Ali", Amount: 100 }] }}
        viewerOptions={{
          viewMode: "PrintLayout",
          zoomMode: "FitPageWidth",
        }}
      />
    </div>
  );
}

export default DxReport;