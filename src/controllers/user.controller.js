import { asyncHandler } from "../utils/asyncHanlder.js";

const registerUser = asyncHandler((req, res) => {
  res.status(200).json({ success: "Ok", message: "Congrats! You made it." });
});

export { registerUser };
