let pageTable = document.getElementById('employees');

fetch('EmployeesData.xml').then((response) => {
  response.text().then((xml) => {
    xmlContent = xml;

    let parser = new DOMParser();
    let xmlDOM = parser.parseFromString(xmlContent, 'application/xml');
    let employees = xmlDOM.getElementsByTagName('Employee');

    let i;
    for (i = 0; i < employees.length; i++) {
      let row = document.createElement('tr');

      // Employee Code
      let td = document.createElement('td');
      td.innerText =
        employees[i].getElementsByTagName(
          'EmployeeCode'
        )[0].childNodes[0].nodeValue;
      row.appendChild(td);

      // First Name
      td = document.createElement('td');
      td.innerText =
        employees[i].getElementsByTagName(
          'EmployeeFirstName'
        )[0].childNodes[0].nodeValue;
      row.appendChild(td);

      // Middle Name
      // td = document.createElement('td');
      // td.innerText =
      //   employees[i].getElementsByTagName(
      //     'EmployeeMiddleName'
      //   )[0].childNodes[0].nodeValue;
      // row.appendChild(td);

      // Last Name
      // td = document.createElement('td');
      // td.innerText =
      //   employees[i].getElementsByTagName(
      //     'EmployeeLastName'
      //   )[0].childNodes[0].nodeValue;
      // row.appendChild(td);

      // Department
      td = document.createElement('td');
      td.innerText =
        employees[i].getElementsByTagName(
          'Department'
        )[0].childNodes[0].nodeValue;
      row.appendChild(td);

      // Salary
      td = document.createElement('td');
      td.innerText =
        employees[i].getElementsByTagName('Salary')[0].childNodes[0].nodeValue;
      row.appendChild(td);

      pageTable.children[1].appendChild(row);
    }
  });
});
