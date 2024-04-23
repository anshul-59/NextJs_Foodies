// import * as React from "react";
// import CircularProgress from "@mui/material/CircularProgress";
// import Box from "@mui/material/Box";

// export default function CircularIndeterminate() {
//   return (
//     <Box sx={{ display: "flex" }}>
//       <CircularProgress />
//     </Box>
//   );
// }
import React from "react";
import ReactLoading from "react-loading";
//
const Loading = ({ type, color }) => (
  <ReactLoading type={type} color={color} height={667} width={375} />
);

export default Loading;
