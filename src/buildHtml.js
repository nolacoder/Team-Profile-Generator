const generateCards = (teamArr) => {
    const cardsArray = [];
    for (let i = 0; i < teamArr.length; i++) {
        if (teamArr[i].constructor.name === "Manager") {
            let card =
                `<div class="card m-3">
                    <div class="card-header bg-primary text-white">
                        <h3>${teamArr[i].name} </h3>
                        <h4>- ${teamArr[i].constructor.name} </h4>
                    </div>
                    <div class="card-body">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID: ${teamArr[i].id}</li>
                            <li class="list-group-item">Email: <a href="mailto:${teamArr[i].email}">${teamArr[i].email}</a></li>
                            <li class="list-group-item">Office number: ${teamArr[i].officeNumber}</li>
                        </ul>
                    </div>
                </div>`;
            cardsArray.push(card);
        }
        else if (teamArr[i].constructor.name === "Engineer") {
            let card =
                `<div class="card m-3">
                    <div class="card-header bg-primary text-white">
                        <h3>${teamArr[i].name} </h3>
                        <h4>- ${teamArr[i].constructor.name} </h4>
                    </div>
                    <div class="card-body">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID: ${teamArr[i].id}</li>
                            <li class="list-group-item">Email: <a href="mailto:${teamArr[i].email}">${teamArr[i].email}</a></li>
                            <li class="list-group-item">GitHub: <a href="https://github.com/${teamArr[i].github}" target="_blank">${teamArr[i].github}</a></li>
                        </ul>
                    </div>
                </div>`;
            cardsArray.push(card);
        }
        else {
            let card =
                `<div class="card m-3">
                    <div class="card-header bg-primary text-white">
                        <h3>${teamArr[i].name} </h3>
                        <h4>- ${teamArr[i].constructor.name} </h4>
                    </div>
                    <div class="card-body">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID: ${teamArr[i].id}</li>
                            <li class="list-group-item">Email: <a href="mailto:${teamArr[i].email}">${teamArr[i].email}</a></li>
                            <li class="list-group-item">School: ${teamArr[i].school}</li>
                        </ul>
                    </div>
                </div>`;
            cardsArray.push(card);
        }

    }
    return cardsArray
}

const generateHTML = (cardsArray) =>
  `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
      <title>Document</title>
  </head>
  <body>
      <div class="container-fluid">
          <div class="row h-25">
              <div class="jumbotron d-flex justify-content-center vw-100 bg-info text-white">
                  <h1>My Team</h1>
                </div>
          </div>
          <div class="row h-75 d-flex justify-content-center flex-wrap">
              ${cardsArray}
          </div>
      </div>
  </body>
  </html>`;

module.exports = {generateHTML, generateCards}
