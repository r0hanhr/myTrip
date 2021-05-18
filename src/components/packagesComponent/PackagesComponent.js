import React from "react";

const PackagesComponent = () => {
  return (
    <>
      <div className="container">
        <h3 className="text-center mb-4 text-primary">Trip Packages</h3>
        <table className="table table-hover shadow p-4 mb-3">
          <thead>
            <tr className="bg-info text-white">
              <th scope="col">No.</th>
              <th scope="col">Package Name</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Manali Package</td>
              <td>8,599</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Kashmir Package</td>
              <td>16,750</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Srinagar Package</td>
              <td>15,600</td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>Shimla Package</td>
              <td>18,999</td>
            </tr>
            <tr>
              <th scope="row">5</th>
              <td>New Delhi Package</td>
              <td>8,599</td>
            </tr>
            <tr>
              <th scope="row">6</th>
              <td>Munnar Package</td>
              <td>15,300</td>
            </tr>
            <tr>
              <th scope="row">7</th>
              <td>Pahalgam Package</td>
              <td>15,600</td>
            </tr>
            <tr>
              <th scope="row">8</th>
              <td>Alleppey Package</td>
              <td>17,150</td>
            </tr>
            <tr>
              <th scope="row">9</th>
              <td>Himachal Pradhesh Package</td>
              <td>8,599</td>
            </tr>
            <tr>
              <th scope="row">10</th>
              <td>Gulmarg Package</td>
              <td>15,600</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mt-5 mb-3 text-muted text-center">
        © rohan223423@gmail.com
      </p>
    </>
  );
};

export default PackagesComponent;
