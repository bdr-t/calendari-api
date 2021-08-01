let data = [
  {
    festius: [
      {
        Gener: [
          "01/02/2021",
          "01/03/2021",
          "01/09/2021",
          "01/10/2021",
          "01/16/2021",
          "01/17/2021",
          "01/23/2021",
          "01/24/2021",
          "01/30/2021",
          "01/31/2021",
          "01/01/2021",
          "01/06/2021",
        ],
        Febrer: [
          "02/06/2021",
          "02/07/2021",
          "02/13/2021",
          "02/14/2021",
          "02/20/2021",
          "02/21/2021",
          "02/27/2021",
          "02/28/2021",
        ],
        Març: [
          "03/06/2021",
          "03/07/2021",
          "03/13/2021",
          "03/14/2021",
          "03/20/2021",
          "03/21/2021",
          "03/27/2021",
          "03/28/2021",
        ],
        Abril: [
          "04/03/2021",
          "04/04/2021",
          "04/10/2021",
          "04/11/2021",
          "04/17/2021",
          "04/18/2021",
          "04/24/2021",
          "04/25/2021",
          "04/02/2021",
          "04/05/2021",
        ],
        Maig: [
          "05/01/2021",
          "05/02/2021",
          "05/08/2021",
          "05/09/2021",
          "05/15/2021",
          "05/16/2021",
          "05/22/2021",
          "05/23/2021",
          "05/29/2021",
          "05/30/2021",
          "05/24/2021",
        ],
        Juny: [
          "06/05/2021",
          "06/06/2021",
          "06/12/2021",
          "06/13/2021",
          "06/19/2021",
          "06/20/2021",
          "06/26/2021",
          "06/27/2021",
          "06/24/2021",
        ],
        Juliol: [
          "07/03/2021",
          "07/04/2021",
          "07/10/2021",
          "07/11/2021",
          "07/17/2021",
          "07/18/2021",
          "07/24/2021",
          "07/25/2021",
          "07/31/2021",
          "08/01/2021",
        ],
        Agost: [
          "08/07/2021",
          "08/08/2021",
          "08/14/2021",
          "08/15/2021",
          "08/21/2021",
          "08/22/2021",
          "08/28/2021",
          "08/29/2021",
          "08/02/2021",
          "08/03/2021",
          "08/04/2021",
          "08/05/2021",
          "08/06/2021",
          "08/09/2021",
          "08/10/2021",
          "08/11/2021",
          "08/12/2021",
          "08/13/2021",
          "08/16/2021",
          "08/17/2021",
          "08/18/2021",
          "08/19/2021",
          "08/20/2021",
          "08/23/2021",
          "08/24/2021",
          "08/25/2021",
          "08/26/2021",
          "08/27/2021",
          "08/30/2021",
          "08/31/2021",
        ],
        Septembre: [
          "09/04/2021",
          "09/05/2021",
          "09/11/2021",
          "09/12/2021",
          "09/18/2021",
          "09/19/2021",
          "09/25/2021",
          "09/26/2021",
          "09/01/2021",
          "09/02/2021",
          "09/03/2021",
        ],
        Octubre: [
          "10/02/2021",
          "10/03/2021",
          "10/09/2021",
          "10/10/2021",
          "10/16/2021",
          "10/17/2021",
          "10/23/2021",
          "10/24/2021",
          "10/30/2021",
          "10/31/2021",
          "10/11/2021",
          "10/12/2021",
        ],
        Novembre: [
          "11/06/2021",
          "11/07/2021",
          "11/13/2021",
          "11/14/2021",
          "11/20/2021",
          "11/21/2021",
          "11/27/2021",
          "11/28/2021",
          "11/01/2021",
        ],
        Desembre: [
          "12/04/2021",
          "12/05/2021",
          "12/11/2021",
          "12/12/2021",
          "12/18/2021",
          "12/19/2021",
          "12/25/2021",
          "12/26/2021",
          "12/06/2021",
          "12/07/2021",
          "12/08/2021",
          "12/09/2021",
          "12/20/2021",
          "12/21/2021",
          "12/22/2021",
          "12/23/2021",
          "12/24/2021",
          "12/27/2021",
          "12/28/2021",
          "12/29/2021",
          "12/30/2021",
          "12/31/2021",
        ],
      },
    ],
    _id: "61043a8420e2a20015ff215a",
    any: 2021,
  },
];
const {
  format,
  add,
  compareAsc,
  differenceInDays,
  isEqual,
  getDay,
} = require("date-fns");
let realData = data[0].festius[0];

const meses = [
  "Gener",
  "Febrer",
  "Març",
  "Abril",
  "Maig",
  "Juny",
  "Juliol",
  "Agost",
  "Septembre",
  "Octubre",
  "Novembre",
  "Desembre",
];

function getDays(data, dies) {
  let inici = new Date(data);
  let mes = format(inici, "MM");
  let date = inici;

  let days = 1;

  while (days < dies) {
    if (format(date, "eee") === "Fri") {
      date = add(date, { days: 3 });
      mes = format(date, "MM");
      days++;
    } else if (realData[meses[mes - 1]].includes(format(date, "MM/dd/yyyy"))) {
      date = add(date, { days: 1 });
      mes = format(date, "MM");
    } else {
      date = add(date, { days: 1 });
      mes = format(date, "MM");
      days++;
    }
  }
  while (realData[meses[mes - 1]].includes(format(date, "MM/dd/yyyy"))) {
    date = add(date, { days: 1 });
    mes = format(date, "MM");
  }
  return date;
}

function getEverything(inici) {
  let sprint1 = getDays("05/01/2021", 15);
  let sprint2 = getDays(add(sprint1, { days: 1 }), 15);
  let sprint3 = getDays(add(sprint2, { days: 1 }), 15);
  let sprint4 = getDays(add(sprint3, { days: 1 }), 21);
  let sprint5 = getDays(add(sprint4, { days: 1 }), 21);

  return (res = {
    sprint1: format(sprint1, "MM/dd/yyyy"),
    sprint2: format(sprint2, "MM/dd/yyyy"),
    sprint3: format(sprint3, "MM/dd/yyyy"),
    sprint4: format(sprint4, "MM/dd/yyyy"),
    sprint5: format(sprint5, "MM/dd/yyyy"),
  });
}

function diasFestivos(inici, final, naturals) {
  res = 0;

  for (let x = 0; x < naturals; x++) {
    let date = add(new Date(inici), { days: x });
    let comparison = compareAsc(new Date(date), new Date());
    if (format(date, "MM/dd/yyyy") === format(new Date(), "MM/dd/yyyy")) res--;
    let mes = format(date, "MM");

    if (comparison === -1) res++;
    else {
      if (realData[meses[mes - 1]].includes(format(date, "MM/dd/yyyy"))) res++;
    }
  }
  console.log(res);
  return res;
}

// let fechasEntrega = getEverything('05/01/2021');

function remainingDays(data, data2) {
  let comparison = compareAsc(new Date(data), new Date());

  if (comparison === -1) {
    return "completat";
  } else {
    let difference = differenceInDays(new Date(data), new Date(data2));
    let noHabils = diasFestivos(data2, data, difference);
    return difference - noHabils;
  }
}

function getDays(inici) {
  let fechasEntrega = getEverything(inici);
  console.log(remainingDays(fechasEntrega.sprint1, inici));
  console.log(remainingDays(fechasEntrega.sprint2, fechasEntrega.sprint1));
  console.log(remainingDays(fechasEntrega.sprint3, fechasEntrega.sprint2));
  console.log(remainingDays(fechasEntrega.sprint4, fechasEntrega.sprint3));
  console.log(remainingDays(fechasEntrega.sprint5, fechasEntrega.sprint4));
}

getDays("05/31/2021");
