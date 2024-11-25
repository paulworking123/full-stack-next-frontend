interface LoginResponse {
  token: string;
  refreshToken: string;
}

interface RegisterResponse {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  dob: string;
  profile: string;
}

class UserServices {
  login = ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }): Promise<LoginResponse> => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      email,
      password,
    });

    var requestOptions: any = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    let loginResult: any = {};

    loginResult = fetch(
      "http://192.168.100.4:4000/api/v1/users/login",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        return JSON.parse(result);
      })
      .catch((error) => console.log("error", error));

    return loginResult;
  };

  register = ({
    firstname,
    lastname,
    email,
    password,
  }: {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
  }): Promise<RegisterResponse> => {
    const dob = "2002-08-18";
    const profile =
      "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D";
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      firstname,
      lastname,
      email,
      password,
      dob,
      profile,
    });

    var requestOptions: any = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    let registerResult: any = {};

    registerResult = fetch(
      "http://192.168.100.4:4000/api/v1/users/create",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        return JSON.parse(result);
      })
      .catch((error) => console.log("error", error));

    return registerResult;
  };
}

export default UserServices;
