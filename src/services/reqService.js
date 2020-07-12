const apiUrl = process.env.SERVER_URL + ":" + process.env.SERVER_PORT;

export const reqService = {
  allReq,
};

function allReq() {
  const url = `${apiUrl}/getAllReqs`;
  const options = {
    method: "GET",
  };
  return fetch(url, options)
    .then((resp) => resp.json())
    .then((json) => {
      return json;
    })
    .catch((err) => {
      console.log("Error in allReq reqService ================");
      console.log(err);
    });
}


function commitReq(req_id) {
  const url = `${apiUrl}/commitReq`;
  const options = {
    method: "POST",
  };
  return fetch(url, options)
    .then((resp) => resp.json())
    .then((json) => {
      return json;
    })
    .catch((err) => {
      console.log("Error in commitReq reqService ================");
      console.log(err);
    });
}
