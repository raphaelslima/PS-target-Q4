import React from "react";
import "./style.css";
import data from "../../mock/data";

function Table() {
  const total = data.reduce((acc, curr) => (acc = acc + curr.invoicing), 0);

  function calcPercentage(value, total) {
    return (value / total).toFixed(2) * 100;
  }

  function formatValue(value) {
    return;
  }

  return (
    <div>
      <table class="styled-table">
        <thead>
          <tr>
            <th>UF</th>
            <th>Total de faturamento</th>
            <th>Porcentagem de faturamento</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr>
              <td>{item.uf}</td>
              <td>
                {item.invoicing.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </td>
              <td>{`${calcPercentage(item.invoicing, total)} %`}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
