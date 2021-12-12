import React from "react";
import { Button } from "react-bootstrap";
import { saveAs } from "file-saver";
import "./exporttoexcel.css";
const ExcelJS = require("exceljs");
class ExportToExcel extends React.Component {
  constructor() {
    super();
    this.state = {
      myData: [],
      fileName: "ListTicket",
      sheetName: "Tickets",
      report: "Danh sách vé chuyến xe A - B",
      myHeader: [
        "STT",
        "Tên",
        "Số điện thoại",
        "Số ghế",
        "Nơi đón",
        "Nơi trả",
        "Loại vé",
        "Giá vé (VND)",
      ],
      myFooter: ["Total", ""],
      widths: [
        { width: 20 },
        { width: 20 },
        { width: 20 },
        { width: 20 },
        { width: 20 },
        { width: 20 },
        { width: 20 },
        { width: 25 },
      ],
    };
  }
  exportToExcel = () => {
    const myData = this.props.getData;
    const myFooter = this.props.getFooter;
    console.log(myData, myFooter);
    if (!myData || myData.length === 0) {
      return;
    }
    this.letExport(
      myData,
      this.state.fileName,
      this.state.sheetName,
      this.state.report,
      this.state.myHeader,
      myFooter,
      this.state.widths
    );
  };
  async letExport(
    myData,
    fileName,
    sheetName,
    report,
    myHeader,
    myFooter,
    widths
  ) {
    const wb = new ExcelJS.Workbook();
    const ws = wb.addWorksheet(sheetName);
    const header = myHeader;
    const columns = myHeader?.length;
    const title_style = {
      border: true,
      money: false,
      height: 100,
      font: { size: 30, bold: true, color: { argb: "000000" } },
      alignment: { horizontal: "center", vertical: "middle" },
      // fill: {
      //   type: "pattern",
      //   pattern: "solid",
      //   fgColor: {
      //     argb: "0000FF",
      //   },
      // },
    };
    const header_style = {
      border: true,
      money: false,
      height: 70,
      font: { size: 15, bold: true, color: { argb: "000000" } },
      alignment: { horizontal: "center", vertical: "middle" },
    };
    const data_style = {
      border: true,
      height: 0,
      font: { size: 12, bold: false, color: { argb: "000000" } },
      alignment: null,
      fill: null,
    };
    const footer_style = {
      border: true,
      money: true,
      height: 70,
      font: { size: 15, bold: false, color: { argb: "000000" } },
      alignment: null,
      fill: {
        type: "pattern",
        pattern: "solid",
        fgColor: {
          arbg: "0000FF",
        },
      },
    };
    if (widths && widths.length > 0) {
      ws.columns = widths;
    }

    let row = this.addRow(ws, [report], title_style);
    this.mergeCells(ws, row, 1, columns);
    this.addRow(ws, myHeader, header_style);
    myData.forEach((row) => {
      this.addRow(ws, Object.values(row), data_style);
    });
    row = this.addRow(ws, myFooter, footer_style);
    this.mergeCells(ws, row, 1, 2);
    const buf = await wb.xlsx.writeBuffer();
    saveAs(new Blob([buf]), `${fileName}.xlsx`);
  }

  addRow = (ws, data, section) => {
    const borderStyles = {
      top: { style: "thin" },
      left: { style: "thin" },
      bottom: { style: "thin" },
      right: { style: "thin" },
    };
    const row = ws.addRow(data);
    row.eachCell({ includeEmpty: true }, (cell, colNumber) => {
      if (section?.border) {
        cell.border = borderStyles;
      }
      if (section?.money) {
        cell.alignment = { horizontal: "right", vertical: "middle" };
        cell.numFmt = "$#,##0.00;[Red]-$#,##0.00";
      }
      if (section?.alignment) {
        cell.alignment = section.alignment;
      } else {
        cell.alignment = { vertical: "middle" };
      }
      if (section?.font) {
        cell.font = section.font;
      }
      if (section?.fill) {
        cell.fill = section.fil;
      }
    });
    if (section?.fill) {
      row.heigh = section.height;
    }
    return row;
  };

  mergeCells = (ws, row, from, to) => {
    ws.mergeCells(`${row.getCell(from)._address}:${row.getCell(to)._address}`);
  };

  render() {
    return (
      <div>
        <button
          className="export-excel-btn"
          onClick={() => this.exportToExcel()}
        >
          Xuất danh sách vé
        </button>
      </div>
    );
  }
}
export default ExportToExcel;
