const express = require("express");
const prisma  = require("./db");
const app = express();
const port = 3000;
const argon2 = require('argon2');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/signup", async (req, res) => {
  // For Error Handling
  let step = "initialization";

  try {
    const { firstname, lastname, email, matric_no, username, password } = req.body;
   
    step = "checking matriculation number";
    const matriculation_check = await prisma.student.findFirst({
      where: {
        matricNo: matric_no,
      },
    });

    if (matriculation_check) {
      return res.status(400).json({
        error: "Matric_No already exists",
      });
    }

    step = "hashing password";
    const hashPassword = await argon2.hash(password);

    step = "creating student record";
    await prisma.student.create({
      data: {
        firstname,
        lastname,
        email,
        username,
        matricNo: matric_no,
        password: hashPassword,
      },
    });

    return res.status(201).json({
      message: "Signup successful",
    });

  } catch (error) {
    console.error(`Error during ${step}:`, error);

    return res.status(500).json("Oops! Something Went Wrong");
  }
});

app.post("/login", async (req, res) => {
  let step = "initialization";

  try {
    const { username, password } = req.body;

    step = "checking username";
    const usernamecheck = await prisma.student.findFirst({
      where: { username },
    });

    if (!usernamecheck) {
      return res.status(404).json("Username not Found");
    }

    step = "verifying password";
    const passwordCheck = await argon2.verify(
      usernamecheck.password,
      password
    );

    if (!passwordCheck) {
      return res.status(400).json("Password is Wrong!");
    }

    step = "sending success response";
    return res.status(200).json({
      message: "Login successful",
      usernamecheck,
    });

  } catch (error) {
    console.error(`Error during ${step}:`, error);

    return res.status(500).json("Something Went Wrong while trying to login");
  }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
